import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import styled from 'styled-components';

const Auth0Button = () => {
	const { loginWithRedirect, isAuthenticated } = useAuth0();
	return (
		!isAuthenticated && (
			<button
				onClick={() => loginWithRedirect()}
				type='button'
				className='myButton'
			>
				Sign in
			</button>
		)
	);
};

export default Auth0Button;

const Button = styled.button``;
