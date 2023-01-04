import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
import Agents from './pages/Agents';
import Landing from './pages/Landing';
import SignIn from './pages/SignIn';

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<SharedLayout />}
				>
					<Route
						index
						path='stats'
						element={'Stats'}
					/>
					<Route
						path='listings'
						element={'Listings'}
					/>
					<Route
						path='properties'
						element={'Properties'}
					/>
					<Route
						path='market'
						element={'Markets'}
					/>
					<Route
						path='profile'
						element={'User profile'}
					/>
				</Route>
				<Route
					path='signout'
					element={<Landing />}
				/>
				<Route
					path='landing'
					element={<Landing />}
				/>

				<Route
					path='/signin'
					element={<SignIn />}
				/>
				<Route
					path='agents'
					element={<Agents />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
