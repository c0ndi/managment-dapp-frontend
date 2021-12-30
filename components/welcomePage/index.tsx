declare let window: any;

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
		<div>
			<button onClick={connectToMetamask}>
				Connect
			</button>
		</div>
	);
}

export default WelcomePage;
