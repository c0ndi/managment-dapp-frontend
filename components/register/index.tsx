import { useState } from 'react';
import { useSelector } from 'react-redux';
import { isEthBrowser } from '../../utils/isEthBrowser';
import Contract from '../../utils/contract';
import isConnected from '../../utils/isConnected';
import { FormData } from '../../types/Interfaces';
import {
	FormControl,
	TextField,
	MenuItem,
	Select,
	Box,
	InputLabel,
	Button,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function Register() {
	const [formData, setFormData] = useState<FormData>({
		fullName: '',
		age: 0,
		gender: '',
		jobType: '',
	});

	const account = useSelector<any>(
		(state) => state.account.account
	);

	function register(e: Event) {
		const contract = Contract();
		e.preventDefault();
		contract.methods
			.register(
				formData.age,
				formData.fullName,
				formData.gender,
				formData.jobType
			)
			.send({
				from: account,
				gas: 3000000,
			});
	}
	return (
		<Box
			p='10% 20%'
			sx={{
				display: 'flex',
				alignItems: 'center',
				flexDirection: 'column',
			}}
		>
			<Box
				sx={{
					display: 'inline',
					color: '#000',
					fontFamily: 'Inter',
					fontWeight: 300,
					fontSize: '2rem',
					p: '1.5em 0',
				}}
			>
				Register
			</Box>
			<FormControl
				sx={{
					m: 1,
					gap: 1,
					width: '60%',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<TextField
					type='text'
					placeholder='Fullname'
					onChange={(e) =>
						setFormData({
							...formData,
							fullName: e.target.value,
						})
					}
				/>
				<TextField
					type='text'
					placeholder='Age'
					onChange={(e) =>
						setFormData({
							...formData,
							age: Number(e.target.value),
						})
					}
				/>
				<FormControl>
					<InputLabel id='gender-label'>
						Gender
					</InputLabel>
					<Select
						labelId='gender-label'
						label='Gender'
						onChange={(e) =>
							setFormData({
								...formData,
								gender: e.target.value,
							})
						}
					>
						<MenuItem value='female'>
							Female
						</MenuItem>
						<MenuItem value='male'>
							Male
						</MenuItem>
						<MenuItem value='other'>
							Other
						</MenuItem>
					</Select>
				</FormControl>
				<FormControl>
					<InputLabel id='jobType-label'>
						Job-type
					</InputLabel>
					<Select
						labelId='jobType-label'
						label='Job-type'
						onChange={(e) =>
							setFormData({
								...formData,
								jobType: e.target.value,
							})
						}
					>
						<MenuItem value='electric'>
							Elektryk
						</MenuItem>
						<MenuItem value='logistic'>
							Logistic
						</MenuItem>
						<MenuItem value='frontend'>
							Frontend developer
						</MenuItem>
						<MenuItem value='backend'>
							Backend developer
						</MenuItem>
					</Select>
				</FormControl>
				<Button
					sx={{
						width: '200px',
						alignSelf: 'flex-end',
					}}
					variant='contained'
					endIcon={<SendIcon />}
					onClick={register}
				>
					Sign up
				</Button>
			</FormControl>
		</Box>
	);
}

export default Register;
