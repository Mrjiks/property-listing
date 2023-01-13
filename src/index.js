import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './components/context';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
		<Auth0Provider
			domain='dev-lysb4pneu37q1tab.eu.auth0.com'
			clientId='dpcPy88ayCXgNlA397ueVkacyJFXH1mF'
			redirectUri={window.location.origin}
		>
			<AppProvider>
				<App />
			</AppProvider>
		</Auth0Provider>
	</>,
);
