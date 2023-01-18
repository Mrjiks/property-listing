import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const SearchProperty = () => {
	return (
		<Wrapper>
			<form className='search-form'>
				<select
					type='filter'
					className='submit-btn'
				>
					<option value='Rent'>Rent</option>
					<option value='Buy'>Buy</option>
					<option value='Agent'>Agents</option>
				</select>
				<input
					className='search-input'
					type='text'
					placeholder='Enter an address, neighborhood, city'
				/>
				<button
					type='submit'
					className='submit-btn'
				>
					<Link to='/search'>
						<BsSearch className='search-icon' />
					</Link>
				</button>
			</form>
		</Wrapper>
	);
};

export default SearchProperty;

const Wrapper = styled.main`
	display: flex;
	margin: 10px auto;
	width: 100%;
	height: auto;
	justify-content: center;

	.search-form {
		display: flex;
		width: 90%;
		height: 100px;
		justify-content: center;
		align-items: center;

		.search-input {
			width: 100%;
			height: 50%;
			::placeholder {
				padding: 0.3rem;
			}

			&:hover {
				outline: 1px solid olivedrab;
			}
		}
		.submit-btn {
			height: 50%;
			border: 1px solid gray;

			&:hover {
				outline: 1px solid olivedrab;
			}
		}
	}

	@media (min-width: 768px) {
		.search-form {
			display: flex;
			width: 50%;
			height: 100px;
			justify-content: center;
			align-items: center;

			.search-input {
				width: 100%;
				height: 50%;
			}
			.submit-btn {
				height: 50%;
			}
		}
	}
`;
