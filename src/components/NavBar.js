import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavBar = () => {
	return (
		<StyledNavBar>
			<div className='hide-menu'>
				<a href='/'>Home</a>
				<a href='/agents'>Agents</a>
				<a href='/sign-in'>Sign In</a>
			</div>
			<GiHamburgerMenu className='mobile-menu' />
		</StyledNavBar>
	);
};

export default NavBar;

const StyledNavBar = styled.nav`
	display: flex;
	text-decoration: none;
	color: red;
	margin: 10px;

	a {
		text-decoration: none;
		margin: 10px;
		text-transform: capitalize;
	}
	.hide-menu {
		display: none;
	}
	.mobile-menu {
		color: black;
		font-size: 20px;
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
