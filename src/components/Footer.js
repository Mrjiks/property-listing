import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter, BsInstagram } from 'react-icons/bs';

const Footer = () => {
	return (
		<Wrapper>
			<div className='container'>
				<div className='social-media'>
					<FaFacebookF className='social-link' />
					<BsTwitter className='social-link' />
					<BsInstagram className='social-link' />
				</div>
				<p>Phone Support:414.890.9878</p>
				<small>Mon -Fri 9AM - 5PM GMT</small>
				<div className='links'>
					<Link
						to='#'
						className='link'
					>
						Contact Us
					</Link>
					<Link
						to='#'
						className='link'
					>
						Privacy
					</Link>
					<Link
						to='#'
						className='link'
					>
						Terms and Conditions
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
							<span>Jiks &copy; copyright</span> {new Date().getFullYear()}
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
	justify-content: space-between;
	margin: 0rem auto;
	align-items: center;
	background-color: azure;
	height: 100%;
	width: 100%;
	position: static;
	bottom: 0;
	left: 0;
	right: 0;
	text-align: center;

	.container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 0 auto;
		padding: 2rem;
		align-items: center;
		background-color: olivedrab;
		width: 100%;
		.social-media {
			display: flex;
			justify-content: space-around;
			margin-bottom: 2rem;
			font-size: 2rem;

			.social-link {
				margin: 0.5rem;
				color: white;
			}
		}
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
		p,
		small {
			color: white;
		}
	}
	.links {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.link {
			margin: 0.4rem;
			text-decoration: underline;
			text-decoration-color: black;
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
