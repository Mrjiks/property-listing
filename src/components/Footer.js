import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
	return (
		<Wrapper>
			<div className='container'>
				<div className='links'>
					<Link
						to='#'
						className='link'
					>
						Company
					</Link>
					<Link
						to='#'
						className='link'
					>
						Agents
					</Link>
					<Link
						to='#'
						className='link'
					>
						List Today
					</Link>
				</div>
				<div className='logo-wrapper'>
					<Link to='/'>
						<img
							src='https://img.freepik.com/premium-vector/home-icon-house-symbol-simple-vector-design-logo_231786-5048.jpg?w=50'
							alt=''
						/>
					</Link>
					<div>
						<address>
							<span>Jiks@copyright</span> {new Date().getFullYear()}
						</address>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default Footer;

const Wrapper = styled.footer`
	display: flex;
	flex-direction: column;
	flex-basis: 1;
	justify-content: space-between;
	margin: 1rem auto;
	align-items: center;
	background-color: azure;
	height: 100%;
	position: static;
	bottom: 0;
	left: 0;
	right: 0;

	.container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 1rem auto;
		align-items: center;
		background-color: azure;
		.logo-wrapper {
			display: flex;
			flex-direction: row;
			align-items: center;
			margin-top: 1rem;
			address {
				margin-left: 0.5rem;
				span {
					margin-right: 1rem;
					text-decoration: none;
				}
			}
		}
	}
	.links {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.link {
			margin: 0.4rem;
			text-decoration: none;
		}
		&.link:hover {
			cursor: pointer;
		}
	}

	img {
		display: block;
		max-width: 100%;
		height: 30px;
		object-fit: cover;
		margin-right: 1rem;
	}

	@media (min-width: 768px) {
		.container {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			margin-top: 50px;
			align-items: center;
			background-color: azure;
		}
		.links {
			order: 1;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			margin-left: 10rem;
		}
		.logo-wrapper {
			display: flex;
			flex-direction: row;
			align-items: center;

			address {
				margin-left: 0.5rem;
				span {
					margin-right: 1rem;
					text-decoration: none;
				}
			}
		}
	}
`;
