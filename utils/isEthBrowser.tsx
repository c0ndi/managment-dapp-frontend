import { useEffect } from 'react';

declare let window: any;
const Web3 = require('web3');

export function isEthBrowser() {
	useEffect(() => {
		if (window.ethereum) {
			window.web3 = new Web3(window.ethereum);
		} else if (window.web3) {
			window.web3 = new Web3(
				window.web3.currentProvider
			);
		} else {
			window.alert(
				'Non-Ethereum browser detected. You should consider trying MetaMask!'
			);
		}
	});
}
