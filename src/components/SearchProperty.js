import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
const SearchProperty = () => {
	return (
		<StyledSearchWrapper>
			<form className='search-form'>
				<div className='categories'>
					<button type='button'>House</button>
					<button type='button'>Land</button>
					<button type='button'>Commercial</button>
				</div>

				<div className='search-wrapper'>
					<input
						className='search-input'
						type='text'
						placeholder='Enter an address, neighborhood, city'
					/>
					<button
						type='submit'
						className='submit-btn'
					>
						<BsSearch className='search-icon' />
					</button>
				</div>
			</form>
		</StyledSearchWrapper>
	);
};

export default SearchProperty;

const StyledSearchWrapper = styled.main`
	display: flex;
	flex-basis: 1;
	flex-direction: column;
	justify-content: space-evenly;
	margin: 0 auto;

	.search-form {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.categories {
		display: flex;
		justify-content: space-evenly;

		button {
			margin: 1rem;
			width: 100%;
			cursor: pointer;

			:nth-child(3) {
				color: white;
				border-radius: 8px;
				background: olivedrab;
			}
		}
	}
	.search-wrapper {
		position: relative;
		width: 100%;
		.search-input {
			background-color: #f0fcfa;
			border: 1px solid olivedrab;
			border-radius: 8px;
			height: 45px;
			width: 100%;
		}
		.submit-btn {
			position: absolute;
			left: 85%;
			width: 20px;
			height: 10px;
			top: 25%;

			background-color: #f0fcfa;
		}
		.search-icon {
			font-size: 1.3rem;
			color: olivedrab;
		}
		.categories {
			display: flex;
			justify-content: space-around;
			margin: 10px auto;
			background-color: white;
			width: 100%;
		}

		::placeholder {
			color: #453b33;
			text-align: left;
			padding: 2rem;
		}
	}

	@media (min-width: 768px) {
		.search-wrapper {
			position: relative;
			font-size: 2rem;
			.submit-btn {
				position: absolute;
				left: 80%;
				width: 50px;
				height: 30px;
				top: 25%;
				.search-icon {
					font-size: 2rem;
					color: olivedrab;
				}
			}
		}
		.search-input {
			background-color: #f0fcfa;
			border: 1px solid olivedrab;
			border-radius: 8px;
			height: 45px;
			width: 100%;
			margin: 0 auto;

			margin-bottom: 10px;
			::placeholder {
				color: #453b33;
				text-align: left;
				padding: 2rem;
			}
		}
		.categories {
			display: flex;
			justify-content: space-around;

			button {
				margin: 1rem;
				width: 100%;
				cursor: pointer;

				:nth-child(3) {
					color: white;
					border-radius: 8px;
					background: olivedrab;
				}
			}
		}
	}
`;
