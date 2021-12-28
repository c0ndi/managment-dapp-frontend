declare let window: any;
import abi from '../abi/abi.json';
import { contractAddress } from '../utils/contractAddress';

function Contract() {
	const web3 = window.web3;
	const myContract = new web3.eth.Contract(
		abi,
		contractAddress
	);
	return myContract;
}

export default Contract;
