import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const Auth0Button = () => {
	const { loginWithRedirect, isAuthenticated } = useAuth0();
	return (
		!isAuthenticated && (
			<button onClick={() => loginWithRedirect()}>Sign in</button>
		)
	);
};

export default Auth0Button;
