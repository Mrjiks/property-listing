import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from './context';
import { AiOutlineClose } from 'react-icons/ai';
import { NavLinks } from '../data';
import MobileMenuLink from './MobileMenuLink';
import { motion, AnimatePresence } from 'framer-motion';

// const backdrop = {
// 	hidden: { opacity: 0 },
// };

const MobileMenu = () => {
	const { toggleMenu, showMenu } = useGlobalContext();

	return (
		<StyledMenuWrapper>
			<motion.div
				className='mobile-menu'
				initial={{ opacity: 1, y: -300 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.9 }}
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
`;
