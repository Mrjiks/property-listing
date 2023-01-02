import styled from 'styled-components';

const SearchProperty = () => {
	return (
		<StyledSearchWrapper>
			<form className='search-form'>
				<div className='search-btns'>
					<button type='button'>House</button>
					<button type='button'>Land</button>
					<button type='button'>Commercial</button>
				</div>
				<input
					className='search-input'
					type='text'
					placeholder='Search property'
				/>
			</form>
		</StyledSearchWrapper>
	);
};

export default SearchProperty;

const StyledSearchWrapper = styled.main`
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-basis: 1;

	.search-form {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin: 0px auto;
		width: 100%;
	}
	.search-btns {
		display: flex;
		justify-content: space-around;
		margin: 10px auto;
		width: 100%;
		height: 40px;
		background-color: white;
		button {
			margin: 0.2rem;
			width: 40%;
			:nth-child(3) {
				color: white;
				border-radius: 8px;
				background: olivedrab;
			}
		}
	}
	.search-input {
		background: olivedrab;
		border: none;
		border-radius: 8px;
		height: 45px;
		width: 100%;
		margin: 0 auto;
		margin-bottom: 10px;
		::placeholder {
			color: white;
			text-align: center;
		}
	}
`;
