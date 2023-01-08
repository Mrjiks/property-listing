import React from 'react';
import styled from 'styled-components';

const SingleFeatured = () => {
	return (
		<Wrapper className='wrapper'>
			<div className='featured-house'>
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
		</Wrapper>
	);
};

export default SingleFeatured;

const Wrapper = styled.div`
	display: flex;
	img {
		width: 100%;
		border-radius: 8px;
		margin-bottom: 0.5rem;
	}
	.featured-details {
		padding: 1rem;
		background: olivedrab;
		color: white;
		transition: all 1s linear;
	}
	.featured-details:hover {
		background: white;
		color: olivedrab;
		cursor: pointer;
	}

	@media (min-width: 768px) {
		.wrapper {
			display: flex;
			img {
				width: 100%;
				border-radius: 8px;
				margin-bottom: 1rem;
			}
			.featured-house:hover {
				background: olivedrab;
				color: white;
			}
		}
	}
`;
