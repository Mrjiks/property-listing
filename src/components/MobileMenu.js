import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from './context';

const MobileMenu = () => {
	const { toggleMenu } = useGlobalContext();
	return (
		<StyledMenuWrapper>
			<div className='mobile-menu'>
				<a href='/'>Home</a>
				<a href='/agents'>Agents</a>
				<a href='/sign-in'>Sign In</a>

				<button
					type='button'
					className='close-btn'
					onClick={() => toggleMenu()}
				>
					close
				</button>
			</div>
		</StyledMenuWrapper>
	);
};

export default MobileMenu;

const StyledMenuWrapper = styled.div`
	display: flex;
	flex-basis: 1;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
	border-radius: 8px;

	.mobile-menu {
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		position: fixed;
		inset: 0;
		height: 70%;
		background: olivedrab;

		a {
			text-decoration: none;
			text-transform: capitalize;
			color: white;
			margin: 1rem;
		}
		a:hover {
			text-decoration: underline;
			text-decoration-color: white;
		}
		.close-btn {
			width: 30%;
			height: 40px;
			border-radius: 8px;
			margin: 0 auto;
			color: olivedrab;
		}
	}
`;
