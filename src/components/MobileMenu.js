import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from './context';
import { AiOutlineClose } from 'react-icons/ai';
import { NavLinks } from '../data';
import MobileMenuLink from './MobileMenuLink';
import { motion, AnimatePresence } from 'framer-motion';

const showNav = {
	key: 'mobile-menu',
	initial: { opacity: 1, y: '-100%' },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.8 },
	exit: { opacity: 0, y: '100%', transition: { duration: 0.9 } },
};

const MobileMenu = () => {
	const { toggleMenu, showMenu } = useGlobalContext();

	return (
		<StyledMenuWrapper>
			<AnimatePresence>
				<motion.div
					className='mobile-menu'
					{...showNav}
				>
					{NavLinks &&
						NavLinks.map(link => {
							return (
								<MobileMenuLink
									key={link.id}
									{...link}
								/>
							);
						})}
					<button
						type='button'
						onClick={() => toggleMenu()}
						className='close-btn'
					>
						<AiOutlineClose />
					</button>
				</motion.div>
			</AnimatePresence>
		</StyledMenuWrapper>
	);
};

export default MobileMenu;

const StyledMenuWrapper = styled.div`
	display: flex;
	flex-basis: 1;
	justify-content: space-between;
	align-items: center;
	border-radius: 8px;

	.mobile-menu {
		display: flex;
		flex-direction: column;
		width: 100%;
		position: fixed;
		align-items: left;
		margin: 0 auto;
		inset: 0;
		height: 65%;
		background: olivedrab;
		z-index: 11;
		a {
			text-decoration: none;
			text-transform: capitalize;
			color: white;
		}

		a:hover {
			text-decoration: underline;
			text-decoration-color: white;
		}
		.close-btn {
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
	@media (orientation: landscape) {
		.hide-menu {
			display: flex;
		}
		.mobile-menu {
			display: none;
		}
		.mobile-menu {
			display: flex;
			flex-direction: column;
			width: 100%;
			position: fixed;
			align-items: left;
			margin: 0 auto;
			inset: 0;
			height: 100%;
			background: olivedrab;
			z-index: 11;
		}
	}
`;
