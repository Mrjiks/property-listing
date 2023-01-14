import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import Auth0Button from './Auth0Button';
import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
	const { isLoading, error } = useAuth0();
	return (
		<Wrapper>
			{error && <p>Authentication Error</p>}
			{!error && isLoading && <p>Loading</p>}
			{!error && !isLoading && (
				<div>
					<FcGoogle className='google' />
					<LogoutButton />
					<Auth0Button />
				</div>
			)}
		</Wrapper>
	);
};

export default SocialLogin;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	width: 90%;
	.google {
		font-size: 1.5rem;
		position: absolute;
		padding-left: 0.2rem;
		top: 25px;
	}
`;
