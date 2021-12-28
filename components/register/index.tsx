import { useState } from 'react';
import styles from './index.module.scss';
import { useSelector } from 'react-redux';
import { isEthBrowser } from '../../utils/isEthBrowser';
import Contract from '../../utils/contract';
import isConnected from '../../utils/isConnected';

function Register() {
	isConnected();

	const [formData, setFormData] = useState<any>({
		fullName: '',
		age: 0,
		gender: '',
		jobType: '',
	});

	isEthBrowser();

	const account = useSelector<any>(
		(state) => state.account.account
	);

	const metamaskConnection = useSelector<any>(
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
		<div className={styles.wrapper}>
			<form>
				<input
					type='text'
					placeholder='Fullname'
					onChange={(e) =>
						setFormData({
							...formData,
							fullName: e.target.value,
						})
					}
				/>
				<input
					type='text'
					placeholder='Age'
					onChange={(e) =>
						setFormData({
							...formData,
							age: e.target.value,
						})
					}
				/>
				<select
					onChange={(e) =>
						setFormData({
							...formData,
							gender: e.target.value,
						})
					}
				>
					<option value='female'>Female</option>
					<option value='male'>Male</option>
					<option value='other'>Other</option>
				</select>
				<select
					onChange={(e) =>
						setFormData({
							...formData,
							jobType: e.target.value,
						})
					}
				>
					<option value='electric'>
						Elektryk
					</option>
					<option value='logistic'>
						Logistic
					</option>
					<option value='frontend'>
						Frontend developer
					</option>
					<option value='backend'>
						Backend developer
					</option>
				</select>
				<button onClick={register}>Wyslij</button>
			</form>
		</div>
	);
}

export default Register;
