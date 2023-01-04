import React from 'react';
import styled from 'styled-components';
import DashboardIcons from './DashboardIcons';
import { data } from '../data.js';
import SideBarLogo from './SideBarLogo';

const SideBarMenu = () => {
	return (
		<Wrapper>
			<div className='logo'>
				<DashboardIcons />
			</div>
			{data &&
				data?.map(item => {
					return (
						<SideBarLogo
							key={item.id}
							{...item}
						/>
					);
				})}
		</Wrapper>
	);
};

export default SideBarMenu;
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	.logo {
		margin-bottom: 1rem;
		background-color: #f0fcfa;
	}
`;
