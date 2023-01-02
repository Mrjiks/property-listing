import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import React from 'react';
import MobileMenu from './MobileMenu';
import { useGlobalContext } from './context';

const NavBar = () => {
	const { toggleMenu } = useGlobalContext();
	return (
		<StyledNavBar>
			<div className='hide-menu'>
				<a href='/'>Home</a>
				<a href='/agents'>Agents</a>
				<a href='/sign-in'>Sign In</a>
			</div>
			<GiHamburgerMenu
				className='mobile-menu'
				onClick={() => toggleMenu()}
			/>
		</StyledNavBar>
	);
};

export default NavBar;

const StyledNavBar = styled.nav`
	display: flex;
	text-decoration: none;
	flex-basis: 1;
	align-items: center;

	a {
		text-decoration: none;
		text-transform: capitalize;
		color: white;
		margin-right: 2rem;
	}
	a:hover {
		text-decoration: underline;
		text-decoration-color: white;
	}
	.hide-menu {
		display: none;
	}
	.mobile-menu {
		color: black;
		font-size: 20px;
		margin-right: 1rem;
	}
	@media (min-width: 768px) {
		.hide-menu {
			display: block;
		}
		.mobile-menu {
			display: none;
		}
	}
`;
