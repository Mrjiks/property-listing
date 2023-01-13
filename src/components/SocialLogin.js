import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import Auth0Button from './Auth0Button';
import styled from 'styled-components';

const SocialLogin = () => {
	const { isLoading, error } = useAuth0();
	return (
		<Wrapper>
			<small>or with Google</small>
			{error && <p>Authentication Error</p>}
			{!error && isLoading && <p>Loading</p>}
			{!error && !isLoading && (
				<>
					<LogoutButton />
					<Auth0Button />
				</>
			)}
		</Wrapper>
	);
};

export default SocialLogin;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%;
`;
