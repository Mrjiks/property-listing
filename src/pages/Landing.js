import React from 'react';
import styled from 'styled-components';

import {
	SearchProperty,
	HeroSection,
	NavBarWrapper,
	FeaturedProperty,
	MobileMenu,
	DetailHouse,
} from '../components';

import { useGlobalContext } from '../components/context';
import Footer from '../components/Footer';

function Landing() {
	const { showMenu } = useGlobalContext();

	return (
		<Wrapper>
			<NavBarWrapper />
			<HeroSection />
			<SearchProperty />
			<FeaturedProperty />

			{showMenu && <MobileMenu />}
			{/* <DetailHouse /> */}
			<Footer />
		</Wrapper>
	);
}

export default Landing;

const Wrapper = styled.div`
	display: flex;
	width: 90vw;
	flex-direction: column;
	/* padding: 1rem; */
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
