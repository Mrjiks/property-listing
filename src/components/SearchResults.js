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

			<SearchProperty />

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
				<Link to='/signin'>Sign in</Link>
			</div>
			<div className='search-details'>
				<h2>Rental Listings</h2>

				<div className='more-info'>
					<p className='total-results'>2349 results</p>
					<p>Sorted: </p>
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
	.property-type {
		display: flex;
		justify-content: space-evenly;
		margin: 0 auto;
		margin-top: 2rem;
		width: 90%;
	}
	.search-details {
		display: flex;
		flex-direction: column;
		justify-content: left;
		/* margin: 0 auto; */
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
`;
