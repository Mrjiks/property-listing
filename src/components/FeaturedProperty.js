import styled from 'styled-components';
import SingleFeatured from './SingleFeatured';

const FeaturedProperty = () => {
	return (
		<StyledFeaturedWrapper>
			<div className='featured-info'>
				<h2 className='featured-header'>Featured properties</h2>
				<p className='feature-more-info'>
					Newly verified realtors and property developers.
				</p>
			</div>
			<div className='featured-container'>
				<SingleFeatured className='house-card' />
				<SingleFeatured className='house-card' />
				<SingleFeatured className='house-card' />
				<SingleFeatured className='house-card' />
				<SingleFeatured className='house-card' />
				<SingleFeatured className='house-card' />
			</div>
		</StyledFeaturedWrapper>
	);
};
export default FeaturedProperty;
const StyledFeaturedWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-template-rows: repeat(auto, 1fr);
	margin: 0px auto;
	width: 90%;

	.featured-info {
		text-align: left;
		margin: 1rem;
	}
	.featured-container {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: repeat(auto, 1fr);
		gap: 2rem;
	}
	.featured-details {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0rem auto;
	}
	.price-info {
		display: flex;
		justify-content: space-between;
		width: 100%;
		margin: 0 auto;
		margin-top: 10px;
		.tag {
			color: #f0fcfa;
			background-color: olivedrab;
			border-radius: 4px;
			padding: 0.01rem;
		}
	}
	@media (min-width: 768px) {
		.featured-container {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 2rem;
			img {
				margin: 10px auto;
				width: 100%;
			}
		}
	}
	@media (min-width: 1024px) {
		.featured-container {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			/* grid-template-rows: repeat(2, 1fr); */
			gap: 2rem;
			img {
				margin: 10px auto;
				width: 100%;
				border-radius: 8px;
			}
		}
	}
`;
