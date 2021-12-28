import { createSlice } from '@reduxjs/toolkit';
import { AccountOptions } from '../types/Interfaces';

const userInitialState: AccountOptions = {
	account: '',
	metamaskConnection: false,
};

export const accountSlice = createSlice({
	name: 'account',
	initialState: userInitialState,
	reducers: {
		setAccount: (state: AccountOptions, action) => ({
			account: action.payload,
			metamaskConnection: true,
		}),
	},
});

export const { setAccount } = accountSlice.actions;

export default accountSlice.reducer;
