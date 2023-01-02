import React from 'react';
import styled from 'styled-components';
import { MdOutlineLocationOn } from 'react-icons/md';

const HeroSection = () => {
	return (
		<StyledHeroWrapper>
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
							Property location
						</p>
					</div>
				</div>
				<img
					className='hero-img'
					src='http://cdn.home-designing.com/wp-content/uploads/2017/05/wood-white-and-charcoal-modern-exterior-paint-themes.jpg'
					alt='house'
				/>
			</div>
		</StyledHeroWrapper>
	);
};

export default HeroSection;

const StyledHeroWrapper = styled.main`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	background-color: gray;

	.container {
		display: flex;
		flex-direction: column;
		width: 90%;

		h1,
		p {
			text-align: left;
			margin: 10px;
			letter-spacing: -0.02em;
		}
		p {
			color: black;
			text-align: left;
		}
		span {
			color: #ff8d4c;
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
			background-color: #ff8d4c;
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
				color: red;
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
			width: 100%;
		}
		.container {
			display: flex;
			flex-direction: column;
			width: 95%;
			margin: 0 auto;
			h1,
			p {
				text-align: left;
				margin: 10px;
			}
			p {
				color: black;
				text-align: left;
			}
			span {
				color: orangered;
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
				background-color: orangered;
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
			width: 65%;
		}
	}
`;
