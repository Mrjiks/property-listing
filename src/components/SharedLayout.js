import styled from 'styled-components';
import { DashboardNav, HeroSection, NavBarWrapper } from '../components';
import SideBarMenu from '../components/SideBarMenu';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
	return (
		<>
			<NavBarWrapper />
			<Wrapper>
				<div className='sidebar'>
					<SideBarMenu />
				</div>
				<div className='main-view'>
					{/* <DashboardNav /> */}
					<Outlet />
				</div>
			</Wrapper>
		</>
	);
};

export default SharedLayout;
const Wrapper = styled.div`
	display: flex;
	flex-basis: 1;
	justify-content: space-between;
	.main-view {
		width: 80%;
		display: flex;
		margin: 0 auto;
		justify-content: center;
	}
	.sidebar {
		width: 25%;
	}
`;
