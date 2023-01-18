import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MobileMenu from './MobileMenu';
import SearchProperty from './SearchProperty';

const DetailsHouse = () => {
	return (
		<Wrapper>
			<div className='nav-container'>
				{/* <MobileMenu /> */}
				<div className='img-container'>
					<img
						src=''
						alt='logo'
					/>
				</div>
				<SearchProperty className='search-bar' />
				<Link to='/signin'>Sign</Link>
			</div>

			<div className='result-filters'>
				<select
					name='search-type'
					id='search-type'
				>
					<option value='Land'>Land</option>
					<option value='House'>House</option>
					<option value='Land'>Agents</option>
				</select>
				<select
					name='filter'
					id='filter'
				>
					<option value='Land'>Land</option>
					<option value='House'>House</option>
					<option value='Land'>Agents</option>
				</select>
				<button>Save Search</button>
			</div>
			<div className='search-location'>
				<h3>Lorem, ipsum dolor sit amet consectetur</h3>
				<div>
					<button>
						38,449 <span>Agents Listings</span>
					</button>
					<button>
						234,449 <span>Other Listings</span>
					</button>
					<div className='house-card'>
						<div>
							<div className='img-container'>
								<img
									src='https://www.mydomaine.com/thmb/dke2LC6lH21Pvqwd2lI6AIutnDY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SuCasaDesign-Modern-9335be77ca0446c7883c5cf8d974e47c.jpg'
									alt='house'
								/>
							</div>

							<span>Listing date</span>
							<span className='bookmark'>❤️</span>
							<p className='price'>$5990.00</p>
							<div className='house-info'>
								<span>4 bds</span>|<span>33 ba</span>|2,168 sqft -House for
								sale.
								<address>House address</address>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default DetailsHouse;

const Wrapper = styled.main`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 0 auto;
	padding: 0 16px;
	box-sizing: border-box;
	.nav-container {
		display: flex;
		width: 90%;
	}
	.img-container {
		width: 400px;
		height: auto;

		margin: 0 auto;
	}
	img {
		max-width: 100%;
		display: block;
		object-fit: cover;
	}
`;
