// import './App.css';
import {
	SearchProperty,
	HeroSection,
	NavBarWrapper,
	FeaturedProperty,
} from './components';

function App() {
	return (
		<div className='App'>
			<NavBarWrapper />
			<HeroSection />
			<SearchProperty />
			<FeaturedProperty />
		</div>
	);
}

export default App;
