import type { NextPage } from 'next';
import Head from 'next/head';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import LoadingScreen from '../../components/loadingScreen';
import PendingWorkersPanel from '../../components/pendingWorkersPanel';
import { isEthBrowser } from '../../utils/isEthBrowser';

const Home: NextPage = () => {
	const [active, setActive] = useState(true);

	const metamaskConnection = useSelector<any>(
		(state: any) => state.account.metamaskConnection
	);

	isEthBrowser();

	useEffect(() => {
		setTimeout(() => {
			setActive(!active);
		}, 1000);
		if (!metamaskConnection) {
			Router.push('/');
		}
	}, []);
	return (
		<div>
			<Head>
				<title>next + ts</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
			</Head>
			<main>
				{active ? (
					<LoadingScreen />
				) : (
					<PendingWorkersPanel />
				)}
			</main>
		</div>
	);
};
export default Home;
