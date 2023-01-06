import styled from 'styled-components';
import { MobileMenu, NavBarWrapper } from '../components';
import SideBarMenu from '../components/SideBarMenu';
import { Outlet } from 'react-router-dom';
import { useGlobalContext } from './context';

const SharedLayout = () => {
	const { showMenu } = useGlobalContext();
	return (
		<>
			<div className='container'>
				<NavBarWrapper />
				{showMenu && <MobileMenu />}
				<Wrapper>
					<div className='sidebar'>
						<SideBarMenu />
					</div>
					<div className='main-view'>
						{/* <DashboardNav /> */}
						<Outlet />
					</div>
				</Wrapper>
			</div>
		</>
	);
};

export default SharedLayout;
const Wrapper = styled.div`
	display: flex;
	flex-basis: 1;
	justify-content: space-between;
	flex-direction: column;
	.main-view {
		width: 100%;
		display: flex;
		margin: 0 auto;
		justify-content: center;
		align-items: center;
	}
	.sidebar {
		display: block;
		flex-direction: column;
		margin: 0 auto;
		width: 100%;
		position: fixed;
	}
	@media (min-width: 768px) {
		.container {
			display: flex;
			flex-basis: 1;
			justify-content: space-between;
		}
		.main-view {
			width: 80%;
			display: flex;
			margin: 0 auto;
			justify-content: center;
		}
		.sidebar {
			width: 25%;
			display: flex;
		}
	}
`;
