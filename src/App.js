import React from 'react';
import {
	SearchProperty,
	HeroSection,
	NavBarWrapper,
	FeaturedProperty,
	MobileMenu,
} from './components';

import { useGlobalContext } from './components/context';

function App() {
	const { showMenu, customClass } = useGlobalContext();

	return (
		<div className={`${customClass}`}>
			<NavBarWrapper />
			<HeroSection />
			<SearchProperty />
			<FeaturedProperty />
			{showMenu && <MobileMenu />}
		</div>
	);
}

export default App;
