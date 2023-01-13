import React from 'react';
import styled from 'styled-components';
import MobileMenu from './MobileMenu';
import { FeaturedProperty, NavBarWrapper, SearchProperty } from '../components';
import { Link } from 'react-router-dom';
import { useGlobalContext } from './context';
import Footer from './Footer';

const SearchResults = () => {
	const { showMenu, toggleMenu } = useGlobalContext();
	return (
		<Wrapper>
			<NavBarWrapper />
			{showMenu && <MobileMenu />}

			<div className='search-bar'>
				<SearchProperty />
				<button className='save-search'>
					<Link
						to='/signin'
						className='link'
					>
						Save Result
					</Link>
				</button>
			</div>

			<p className='search-filter'>Filter : </p>
			<div className='property-type'>
				<select
					name='rent'
					id='rent'
					className='rent'
				>
					<option value='House'>House</option>
					<option value='Land'>Land</option>
					<option value='Halls'>Halls</option>
				</select>

				<select
					name='filter'
					id='filter'
					className='filter'
				>
					<option value='House'>House</option>
					<option value='Land'>Land</option>
					<option value='Halls'>Halls</option>
				</select>
			</div>
			<div className='search-details'>
				<h2>Rental Listings</h2>

				<div className='more-info'>
					<p className='total-results'>2349 results</p>
				</div>
			</div>
			<div className='results-container'>{<FeaturedProperty />}</div>
			<Footer />
		</Wrapper>
	);
};

export default SearchResults;

const Wrapper = styled.div`
	display: flex;
	flex-basis: 100%;
	flex-direction: column;
	height: 100%;
	margin: 0 auto;
	background: azure;
	.search-bar {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 2rem auto;
		width: 100%;
	}
	.save-search {
		border: 2px solid olivedrab;
		padding: 0.1rem;
		border-radius: 8px;
		background: olivedrab;
		width: 30%;
		margin-top: 1rem;
		.link {
			color: white;
			cursor: pointer;
			text-decoration: none;
			width: 100%;
			text-align: center;
		}
	}
	.search-filter {
		margin-bottom: 1rem;
		margin-left: 1rem;
	}
	.property-type {
		display: flex;
		justify-content: space-evenly;
		margin-left: -2rem;
		width: 90%;
	}
	.search-details {
		display: flex;
		flex-direction: column;
		justify-content: left;
		margin: 0 auto;
		margin: 2rem;
	}
	.more-info {
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		.total-results {
			color: orangered;
		}
	}
	.results-container {
		margin: 0 auto;
	}
	@media (min-width: 768px) {
		.search-bar {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin: 2rem auto;
			width: 100%;
		}
		.save-search {
			border: 2px solid olivedrab;
			padding: 0.1rem;
			border-radius: 8px;
			background: olivedrab;
			width: 10%;
			margin-top: 1rem;
			.link {
				color: white;
				cursor: pointer;
				text-decoration: none;
				width: 100%;
				text-align: center;
			}
		}
		.search-filter {
			margin-bottom: -2rem;
			margin-left: 3rem;
		}
		.property-type {
			display: flex;
			justify-content: flex-start;
			margin: 0 auto;
			margin-top: 2rem;
			margin-left: 2rem;
			width: 100%;
			align-items: center;
			border-radius: 8px;
		}
		select {
			padding: 1rem;
			margin: 1rem;
			border: 2px solid olivedrab;
		}
	}
	.search-details {
		display: flex;
		flex-direction: column;
		justify-content: left;
		margin: 0 auto;
		margin: 2rem;
		margin-left: 3rem;
	}
	@media (orientation: landscape) {
		.search-filter {
			margin-bottom: -2rem;
			margin-left: 3rem;
		}
	}
`;
