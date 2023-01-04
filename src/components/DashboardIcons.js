import styled from 'styled-components';
import { Link } from 'react-router-dom';
import profile from '../images/profile-circled.png';

const DashboardIcons = () => {
	return (
		<Wrapper>
			<Link to='/'>
				<img
					src={profile}
					alt=''
				/>
			</Link>
			<Link
				to='/'
				className='link'
			>
				Agents
			</Link>
		</Wrapper>
	);
};

export default DashboardIcons;

const Wrapper = styled.div`
	display: flex;
	flex-basis: 1;
	justify-content: flex-start;
	align-items: center;

	img {
		display: block;
		max-width: 100%;
		object-fit: cover;
		padding: 1rem;
		margin-right: 1rem;
	}
	.link {
		color: olivedrab;
		text-decoration: none;
	}
`;
