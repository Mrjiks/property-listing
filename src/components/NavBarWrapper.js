import styled from 'styled-components';
import NavBar from './NavBar';

const NavBarWrapper = () => {
	return (
		<StyledWrapper>
			<img
				src='https://img.freepik.com/premium-vector/home-icon-house-symbol-simple-vector-design-logo_231786-5048.jpg?w=50'
				alt=''
			/>
			<NavBar className='hide-menu' />
		</StyledWrapper>
	);
};

export default NavBarWrapper;

const StyledWrapper = styled.div`
	display: flex;
	width: 95%;
	justify-content: space-between;
	align-items: center;
	margin: 10px auto;

	img {
		display: block;
		max-width: 100%;
		object-fit: cover;
	}
`;
