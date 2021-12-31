import { Box, Button } from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Contract from '../../utils/contract';
import { WorkerProps } from '../../types/Interfaces';
import { isEthBrowser } from '../../utils/isEthBrowser';
import Worker from '../worker';

declare let window: any;
const Web3 = require('web3');

function PendingWorkersPanel() {
	const [pendingWorkersCount, setPendingWorkersCount] = useState(0);

	const [pendingWorkers, setPendingWorkers] = useState<Array<WorkerProps>>(
		[]
	);

	const account = useSelector<any>((state) => state.account.account);

	const contract = Contract();

	const tab = [];

	isEthBrowser();

	useEffect(async () => {
		await contract.methods
			.getPendingWorkersCount()
			.call({ from: account })
			.then((result: number) => setPendingWorkersCount(result));

		await contract
			.getPastEvents(
				'personAdded',
				{
					fromBlock: 0,
					toBlock: 'latest',
				},
				function (error: Error, events: any) {
					console.log(error);
				}
			)
			.then(async (events: Array<Object>) => {
				events.forEach((event: any) => {
					tab.push(event.returnValues);
				});
				setPendingWorkers(tab);
			});
	}, []);
	console.log(pendingWorkers);
	return (
		<Box>
			<Button
				variant='outlined'
				sx={{
					height: '42px',
					position: 'absolute',
					top: '7.5%',
					right: '10%',
				}}
			>
				<Link href='/panel'>Panel</Link>
			</Button>
			{pendingWorkers.map((item) => (
				<Worker
					_id={item._id}
					_age={item._age}
					_level={item._level}
					_address={item._address}
					_fullName={item._fullName}
					_gender={item._gender}
					_role={item._role}
					_isWorker={item._isWorker}
					_isRegistered={item._isRegistered}
				/>
			))}
		</Box>
	);
}

export default PendingWorkersPanel;
