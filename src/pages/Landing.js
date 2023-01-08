import React from 'react';
import styled from 'styled-components';
import { motion, useScroll, useSpring } from 'framer-motion';

import {
	SearchProperty,
	HeroSection,
	NavBarWrapper,
	FeaturedProperty,
	MobileMenu,
} from '../components';

import { useGlobalContext } from '../components/context';
import Footer from '../components/Footer';

function Landing() {
	const { showMenu } = useGlobalContext();
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	return (
		<Wrapper>
			<NavBarWrapper />
			<HeroSection />
			<SearchProperty />
			<FeaturedProperty />

			{showMenu && <MobileMenu />}
			<div></div>
			<motion.div
				className='progress-bar'
				style={{ scaleX }}
			/>
			<Footer />
		</Wrapper>
	);
}

export default Landing;

const Wrapper = styled.div`
	display: flex;
	flex-basis: 1;
	flex-direction: column;
	margin: 0 auto;
	.progress-bar {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 10px;
		background: var(--red);
		transform-origin: 0%;
	}
`;
