import React from 'react';
import { MobileMenu, NavBarWrapper } from '../components';
import { useGlobalContext } from '../components/context';
import { motion, useScroll, useSpring } from 'framer-motion';
import { LoremIpsum } from '../components/LoremIpsum';
import styled from 'styled-components';
import Footer from '../components/Footer';

const Agents = () => {
	const { showMenu } = useGlobalContext();
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});
	return (
		<Wrapper>
			{showMenu && <MobileMenu />}
			<NavBarWrapper />
			<div>
				<h1>Welcome to Agent page</h1>
				<motion.div
					className='progress-bar'
					style={{ scaleX }}
				/>
				<LoremIpsum />
			</div>
			<Footer />
		</Wrapper>
	);
};

export default Agents;
const Wrapper = styled.div`
	display:flex .progress-bar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 10px;
		background: var(--red);
		transform-origin: 0%;
	}
`;
