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

function HomePage() {
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

export default HomePage;

const Wrapper = styled.div`
	display: flex;
`;
