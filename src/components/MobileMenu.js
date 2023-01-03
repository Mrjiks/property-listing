import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useGlobalContext } from './context';
import { AiOutlineClose } from 'react-icons/ai';

const MobileMenu = () => {
	const { toggleMenu, showMenu } = useGlobalContext();
	return (
		<StyledMenuWrapper>
			<div className='mobile-menu'>
				<Link to='/'>Home</Link>
				<Link to='agents'>Agents</Link>
				<Link to='signin'>Sign In</Link>
				<Link to='signin'>Sign Up</Link>

				<button
					type='button'
					className='close-btn'
					onClick={() => toggleMenu()}
				>
					{showMenu && <AiOutlineClose className='menu-close' />}
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
		width: 100%;
		position: fixed;
		inset: 0;
		height: 40vh;
		background: olivedrab;
		z-index: 11;
		a {
			text-decoration: none;
			text-transform: capitalize;
			color: white;
			margin: 1rem auto;
		}
		a:hover {
			text-decoration: underline;
			text-decoration-color: white;
		}
		.close-btn {
			/* display: none; */
			width: 20%;
			height: 35px;
			border-radius: 8px;
			color: olivedrab;
			position: absolute;
			bottom: 5px;
			right: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			font-size: 30px;
			color: red;
			&:hover {
				background-color: orangered;
				color: white;
			}
		}
	}
`;
