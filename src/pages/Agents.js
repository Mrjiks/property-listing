import React from 'react';
import { MobileMenu, NavBarWrapper } from '../components';
import { useGlobalContext } from '../components/context';

const Agents = () => {
	const { showMenu } = useGlobalContext();
	return (
		<div>
			{showMenu && <MobileMenu />}
			<NavBarWrapper />
			<div>
				<h1>Welcome to Agent page</h1>
			</div>
		</div>
	);
};

export default Agents;
