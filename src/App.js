import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Agents from './pages/Agents';
import HomePage from './pages/HomePage';
import SignIn from './pages/SignIn';

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<HomePage />}
				/>
				<Route
					path='/signin'
					element={<SignIn />}
				/>
				<Route
					path='/agents'
					element={<Agents />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
