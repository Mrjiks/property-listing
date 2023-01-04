import React from 'react';
import { MobileMenu } from '../components';
import { useGlobalContext } from '../components/context';

const Agents = () => {
	const { showMenu } = useGlobalContext();
	return (
		<div>
			{showMenu && <MobileMenu />}

			<div>
				<h1>Agents Dashboard</h1>
			</div>
		</div>
	);
};

export default Agents;
