import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SideBarLogo = ({ image, text, path }) => {
	return (
		<Wrapper>
			<img
				src={image}
				alt=''
				className='icon'
			/>
			<Link to={path}>{text}</Link>
		</Wrapper>
	);
};

export default SideBarLogo;
const Wrapper = styled.aside`
	display: flex;
	background-color: #f0fcfa;
	align-items: center;
	.icon {
		margin: 1rem;
	}
`;
