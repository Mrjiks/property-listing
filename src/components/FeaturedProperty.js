import styled, { keyframes } from 'styled-components';
import SingleFeatured from './SingleFeatured';
import { featuredHouse } from '../data';

const FeaturedProperty = () => {
	return (
		<StyledFeaturedWrapper>
			<div className='featured-info'>
				<h2 className='featured-header'>Featured properties</h2>
				<p className='feature-more-info'>
					Newly verified realtors and property developers.
				</p>
				<div className='adv-container'>
					<p className='adv'>Advertize with us today!</p>
				</div>
			</div>
			<div className='featured-container'>
				{featuredHouse.map(house => {
					return (
						<SingleFeatured
							key={house.id}
							{...house}
						/>
					);
				})}
			</div>
		</StyledFeaturedWrapper>
	);
};
export default FeaturedProperty;

const move = keyframes`
    from{
        transform: translateX(1px);
    }
    
    to{
        transform: translateX(10%);
    }
`;
const StyledFeaturedWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	margin: 0 auto;
	width: 100%;
	gap: 2rem;
	padding-left: 2rem;
	padding-right: 2rem;
	overflow: hidden;

	.featured-info {
		text-align: left;
		margin: 1rem;
	}
	.featured-container {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		width: 100%;
		margin: 0 auto;
	}
	.adv-container {
		width: 100%;
		margin: 1rem;
	}
	.adv {
		color: red;
		width: 100%;
		margin-right: 20px;
		animation: ${move} 6s linear infinite;
	}

	@media (min-width: 768px) {
		.featured-container {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 1rem;
		}
	}
	@media (min-width: 1024px) {
		.featured-container {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 2rem;
		}
	}
`;
