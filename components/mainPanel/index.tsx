import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';

function MainPanel() {
	const account = useSelector<any>(
		(state) => state.account.account
	);

	const shortAdd =
		String(account).slice(0, 3) +
		'....' +
		String(account).slice(-4);
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
					<Link to='/pending-workers'>
						Pending workers
					</Link>
					{/* workers - page */}
				</Button>
				<Button
					variant='contained'
					sx={{ height: '42px' }}
				>
					<Link to='/workers'>Workers</Link>
					{/* pending workers - page */}
				</Button>
				</Button>
			</Box>
		</Box>
	);
}

export default MainPanel;
