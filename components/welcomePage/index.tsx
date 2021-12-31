declare let window: any;

import { Button, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setAccount } from '../../redux/account';
import { isEthBrowser } from '../../utils/isEthBrowser';

function WelcomePage() {
	const dispatch = useDispatch();

	isEthBrowser();

	const connectToMetamask = async () => {
		if (typeof window.ethereum !== 'undefined') {
			const accounts = await window.ethereum.request({
				method: 'eth_requestAccounts',
			});
			dispatch(setAccount(accounts[0]));
		} else {
			console.log('Please install Metamask');
		}
	};

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				flexDirection: 'column',
				height: '90vh',
				justifyContent: 'center',
			}}
		>
			<Box
				sx={{
					fontSize: '3.5rem',
					fontFamily: 'Inter',
					fontWeight: '200',
					p: '5% 0',
				}}
			>
				Managment dApp
			</Box>
			<Box
				sx={{
					fontSize: '1.25rem',
					fontFamily: 'Inter',
					fontWeight: '300',
					p: '1em 0',
				}}
			>
				Connect Metamask to continue
			</Box>

			<Button
				sx={{
					width: '300px',
					height: '32px',
				}}
				variant='contained'
				onClick={connectToMetamask}
			>
				Connect wallet
			</Button>
		</Box>
	);
}

export default WelcomePage;
