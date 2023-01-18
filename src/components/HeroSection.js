import React from 'react';
import styled from 'styled-components';
import { MdOutlineLocationOn } from 'react-icons/md';

const HeroSection = () => {
	return (
		<Wrapper>
			<div className='wrapper'>
				<div className='container'>
					<h1 className='hero-text'>Find the apartment of your dreams.</h1>
					<p className='hero-more-info'>
						See verified property listings with <span>100%</span> transparency.
					</p>
					<div className='cta-container'>
						<button
							type='button'
							className='buy-btn'
						>
							Buy
						</button>
						<p
							type='button'
							className='rent-btn'
						>
							Rent
						</p>
					</div>
					<div className='location-container'>
						<MdOutlineLocationOn className='location-logo' />
						<p
							type='button'
							className='location-btn'
						>
							Property locations
						</p>
					</div>
				</div>
				{/* Animate this image to background slide show */}
				<img
					className='hero-img'
					src='http://cdn.home-designing.com/wp-content/uploads/2017/05/wood-white-and-charcoal-modern-exterior-paint-themes.jpg'
					alt='house'
				/>
			</div>
		</Wrapper>
	);
};

export default HeroSection;

const Wrapper = styled.main`
	display: flex;
	flex-direction: column;
	flex-basis: 100%;
	justify-content: space-between;
	align-items: center;
	background-color: #f0fcfa;
	overflow: hidden;
	margin: 0 auto;

	.wrapper {
		display: flex;
		flex-direction: column;
		width: 90%;
		margin: 0 auto;
		padding-left: 1rem;
		padding-right: 1rem;

		h1 {
			text-align: center;
			margin-bottom: 10px;
			font-size: 2rem;
		}
		p {
			color: black;
			text-align: center;
		}
		span {
			color: olivedrab;
		}
		.cta-container {
			background-color: white;
			display: flex;
			padding: 1rem;
			width: 70%;
			height: 62px;
			border-radius: 8px;
			align-items: center;
			margin: 15px;
		}
		.buy-btn {
			width: 60%;
			height: 38px;
			border-radius: 8px;
			background-color: olivedrab;
			color: white;
			margin-right: 20px;
		}

		.rent-btn {
			width: 60px;
			color: black;
			margin-right: 20px;
			background-color: white;
		}

		.location-container {
			background-color: white;
			display: flex;
			padding: 1rem;
			width: 90%;
			height: 54px;
			border-radius: 8px;
			align-items: center;
			margin: 15px;
			.location-btn {
				width: 70%;
				color: black;
				margin-right: 10px;
				background-color: white;
			}
			.location-logo {
				font-size: 20px;
				color: olivedrab;
				margin-right: 2rem;
			}
		}
	}

	img {
		display: block;
		max-width: 100%;
		object-fit: cover;
	}

	@media (min-width: 768px) {
		.wrapper {
			display: flex;
			flex-direction: row;
			flex-basis: 1;
		}
		.container {
			display: flex;
			flex-direction: column;
			width: 90%;
			margin: 0 auto;
			h1 {
				text-align: left;
				margin: 10px;
				font-size: 3rem;
				padding-right: 1rem;
			}

			p {
				color: black;
				text-align: left;
			}
			span {
				color: olivedrab;
			}
			.cta-container {
				background-color: white;
				display: flex;
				padding: 1rem;
				width: 60%;
				border-radius: 8px;
			}
			.buy-btn {
				width: 60px;
				height: 25px;
				border-radius: 8px;
				background-color: olivedrab;
				color: white;
				margin-right: 20px;
			}
		}
		img {
			display: block;
			max-width: 100%;
			object-fit: cover;
		}
		.hero-img {
			width: 55%;
		}
		@media (orientation: landscape) {
			.wrapper {
				width: 100%;
			}
		}
	}
`;
