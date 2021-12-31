import { Button } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setAccount } from '../../redux/account';

function MainPanel() {
	const dispatch = useDispatch();
	const account = useSelector<any>(
		(state) => state.account.account
	);

	const shortAdd =
		String(account).slice(0, 3) +
		'....' +
		String(account).slice(-4);

	const disconnectMetamask = async () => {
		location.reload();
		Router.push('/');
	};
	return (
		<Box
			sx={{
				display: 'grid',
				placeItems: 'center',
				height: '100vh',
				width: '100%',
			}}
		>
			<Box
				sx={{
					position: 'absolute',
					left: '5%',
					top: '7.5%',
					fontFamily: 'Inter',
					fontSize: '1.75rem',
					fontWeight: '600',
				}}
			>
				Hello, &nbsp;
				<Box
					sx={{
						fontWeight: '300',
						display: 'inline',
					}}
				>
					{shortAdd}
				</Box>
			</Box>
			<Box
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					gap: '150px',
				}}
			>
				<Button
					variant='contained'
					sx={{ height: '42px' }}
				>
					<Link href='/pending-workers'>
						Pending workers
					</Link>
				</Button>
				<Button
					variant='contained'
					sx={{ height: '42px' }}
				>
					<Link href='/workers'>Workers</Link>
				</Button>
			</Box>
			<Button
				variant='outlined'
				color='error'
				sx={{
					height: '42px',
					position: 'absolute',
					top: '7.5%',
					right: '10%',
				}}
				onClick={disconnectMetamask}
			>
				Disconnect
			</Button>
		</Box>
	);
}

export default MainPanel;
