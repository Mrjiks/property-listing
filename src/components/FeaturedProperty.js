import styled from 'styled-components';

const FeaturedProperty = () => {
	return (
		<StyledFeaturedWrapper>
			<div className='featured-container'>
				<div className='featured-info'>
					<h2 className='featured-header'>Featured properties</h2>
					<p className='feature-more-info'>
						Newly verified realtors and property developers.
					</p>
				</div>
				<img
					src='https://i.pinimg.com/originals/c7/58/43/c7584365f991ea6236fd1f19653f06a2.jpg'
					alt='house'
				/>
				<div className='featured-details'>
					<p className='property-location'>Rental unit in Lagos</p>
					<p>2-bedroom rental unit in Maryland, Lagos City</p>
					<div className='price-info'>
						<p>N800,000</p>
						<p className='tag'>New</p>
					</div>
				</div>
			</div>
		</StyledFeaturedWrapper>
	);
};
export default FeaturedProperty;
const StyledFeaturedWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px auto;
	flex-basis: 1;

	.featured-info {
		text-align: left;
		margin: 10px;
	}
	.featured-container {
		img {
			margin: 10px auto;
			width: 100%;
			border-radius: 8px;
		}
	}
	.featured-details {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
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
`;
