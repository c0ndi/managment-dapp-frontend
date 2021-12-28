declare let window: any;

import styles from './index.module.scss';
import { useDispatch } from 'react-redux';
import { setAccount } from '../../redux/account';
import { isEthBrowser } from '../../utils/isEthBrowser';

function WelcomePage() {
	const dispatch = useDispatch();
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

	isEthBrowser();

	return (
		<div className={styles.wrapper}>
			<p className={styles.header}></p>
			<button
				className={styles.connectBtn}
				onClick={connectToMetamask}
			>
				Connect
			</button>
		</div>
	);
}

export default WelcomePage;
