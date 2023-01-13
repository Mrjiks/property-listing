import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SingleFeatured = ({ title, imageUrl, price, address, tag }) => {
	return (
		<Wrapper className='wrapper'>
			<div className='featured-house'>
				<img
					src={imageUrl}
					alt={title}
				/>
				<div className='featured-details'>
					<p className='property-location'>{address}</p>
					<p>{title}</p>
					<div className='price-info'>
						<motion.p
							className='price'
							whileHover={{
								scale: 1.1,
								textShadow: '0px 0px 8px rgb(255,255,255)',
								boxShadow: '0px 0px 8px rgb(255,255,255)',
							}}
						>
							N{price}
						</motion.p>
						<p className='tag'>{tag}</p>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default SingleFeatured;

const Wrapper = styled.div`
	display: flex;
	flex-basis: 1;
	flex-direction: column;
	margin: 0 auto;
	cursor: pointer;
	img {
		max-width: 100%;
		margin-bottom: 0.5rem;
		object-fit: cover;
	}
	/* .featured-house {
		width: 300px;
		height: auto;
	} */
	.featured-details {
		border-radius: 8px;
		height: auto;
		background: olivedrab;
		color: white;
		transition: all 1s linear;
		padding: 0.5rem;
		width: 100%;
		margin: 1.2rem auto;
	}
	.featured-details:hover {
		background: white;
		color: olivedrab;
		transform: scale(1, 1);
	}

	.price-info {
		display: flex;
		justify-content: space-between;
		width: 100%;
		margin: 0 auto;
		margin-top: 10px;
		padding: 0.5rem;
		.price {
			background-color: orangered;
			padding: 0.2rem;
			border-radius: 10px;
		}
	}
	.tag {
		color: orangered;
		background-color: oldlace;
		border-radius: 4px;
		padding: 0.2rem;
	}
	/* @media (orientation: landscape) {
		.wrapper {
			display: flex;
			img {
				max-width: 100%;
				border-radius: 8px;
				margin-bottom: 1rem;
				object-fit: cover;
			}
			.featured-house:hover {
				background: olivedrab;
				color: white;
				transform: scale(1);
			}
		}
	} */

	@media (min-width: 768px) {
		.wrapper {
			display: flex;
			.featured-house {
				width: 100px;
				height: auto;
				margin: 0 auto;
			}

			img {
				max-width: 100%;
				border-radius: 8px;
				margin-bottom: 1rem;
			}
			.featured-house:hover {
				background: olivedrab;
				color: white;
				transform: scale(1);
			}
		}
	}
`;
