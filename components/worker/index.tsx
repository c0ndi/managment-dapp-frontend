import { Box } from '@mui/material';
import Image from 'next/image';
import { WorkerProps } from '../../types/Interfaces';

function Worker({
	_id,
	_age,
	_level,
	_address,
	_fullName,
	_gender,
	_role,
	_isWorker,
	_isRegistered,
}: WorkerProps) {
	return (
		<Box>
			<Box>
				<Box
					component='img'
					src={`https://avatars.dicebear.com/api/adventurer/${_address}.svg`}
					sx={{ height: '100px', width: '100px' }}
				/>
			</Box>
		</Box>
	);
}

export default Worker;
