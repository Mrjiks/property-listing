import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import React from 'react';
import { useGlobalContext } from './context';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
	const { toggleMenu, showMenu, closeMenu } = useGlobalContext();
	return (
		<StyledNavBar>
			<div className='hide-menu'>
				<NavLink to='dashboard'>Dashboard</NavLink>
				<NavLink to='/agents'>Agents</NavLink>
				<NavLink to='/signin'>Sign In</NavLink>
			</div>

			<button
				type='button'
				className='mobile-menu'
				onClick={() => toggleMenu()}
			>
				{!showMenu ? (
					<GiHamburgerMenu className='menu-bar' />
				) : // <AiOutlineClose className="menu-close" />
				null}
			</button>
		</StyledNavBar>
	);
};

<div>hello world ;)</div>;

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
		color: white;
		font-size: 30px;
		margin-right: 1rem;
		background-color: olivedrab;
		border: none;

		/* z-index: 100; */
	}
	.menu-close {
		color: orangered;
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
