import '../styles/reset.scss';
import '../styles/styles.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/system';

const theme = createTheme({
	typography: {
		fontFamily: ['Inter'].join(','),
	},
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</ThemeProvider>
	);
}

export default MyApp;
