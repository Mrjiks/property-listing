import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import React from 'react';
import { useGlobalContext } from './context';
import { Link } from 'react-router-dom';

const NavBar = () => {
	const { toggleMenu } = useGlobalContext();
	return (
		<StyledNavBar>
			<div className='hide-menu'>
				<Link to='/'>Home</Link>
				<Link to='/agents'>Agents</Link>
				<Link to='/signin'>Sign In</Link>
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
		z-index: 10;
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
