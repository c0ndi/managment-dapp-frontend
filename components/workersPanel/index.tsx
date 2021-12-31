import { Box, Button } from '@mui/material';
import Link from 'next/link';

function WorkersPanel() {
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
		</Box>
	);
}

export default WorkersPanel;
