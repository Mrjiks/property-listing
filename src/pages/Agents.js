import React from 'react';
import { Link } from 'react-router-dom';
import { MobileMenu, NavBarWrapper } from '../components';
import { useGlobalContext } from '../components/context';

const Agents = () => {
	const { showMenu } = useGlobalContext();
	return (
		<div>
			{showMenu && <MobileMenu />}
			<NavBarWrapper />
			<div>
				<h1>Agents Dashboard</h1>
			</div>
			<Link to='/'>Go Home</Link>
		</div>
	);
};

export default Agents;
