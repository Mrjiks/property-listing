import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './NavBar';

const NavBarWrapper = () => {
	return (
		<StyledWrapper>
			<Link to='/'>
				<img
					src='https://img.freepik.com/premium-vector/home-icon-house-symbol-simple-vector-design-logo_231786-5048.jpg?w=50'
					alt=''
				/>
			</Link>
			<NavBar className='hide-menu' />
		</StyledWrapper>
	);
};

export default NavBarWrapper;

const StyledWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
	background-color: olivedrab;

	img {
		display: block;
		max-width: 100%;
		object-fit: cover;
		padding: 1rem;
		width: 61px;
		height: 61px;
	}
`;
