import React from 'react';
import {
	SearchProperty,
	HeroSection,
	NavBarWrapper,
	FeaturedProperty,
	MobileMenu,
} from '../components';

import { useGlobalContext } from '../components/context';

function HomePage() {
	const { showMenu, customClass } = useGlobalContext();

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
