import Router from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function isConnected() {
	const metamaskConnection = useSelector<any>(
		(state: any) => state.account.metamaskConnection
	);
	useEffect(() => {
		if (!metamaskConnection) {
			Router.push('/');
		}
	});
}
