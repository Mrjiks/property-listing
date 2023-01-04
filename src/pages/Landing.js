import React from 'react';
import styled from 'styled-components';

import {
	SearchProperty,
	HeroSection,
	NavBarWrapper,
	FeaturedProperty,
	MobileMenu,
} from '../components';

import { useGlobalContext } from '../components/context';

function Landing() {
	const { showMenu } = useGlobalContext();

	return (
		<div>
			<NavBarWrapper />
			<HeroSection />
			<SearchProperty />
			<FeaturedProperty />
			{showMenu && <MobileMenu />}
		</div>
	);
}

export default Landing;

const Wrapper = styled.div`
	display: flex;
`;
