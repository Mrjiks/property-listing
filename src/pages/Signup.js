import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MobileMenu, NavBarWrapper } from '../components';
import { useGlobalContext } from '../components/context';
import Footer from '../components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
	const { showMenu } = useGlobalContext();
	const [checkName] = React.useState(true);
	const [user, setUser] = React.useState({
		name: '',
		email: '',
		password: '',
	});

	const handleChange = e => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};
	const onSubmit = e => {
		e.preventDefault();
		localStorage.setItem('user', JSON.stringify(user));
		toast.success('Logged in signed up', { draggable: true, progress: 3 });
		setInterval(() => {
			window.location = '/signin';
		}, 2000);
	};

	return (
		<>
			<ToastContainer
				position='top-center'
				autoClose={5000}
				theme='dark'
			/>
			{showMenu && <MobileMenu />}
			<NavBarWrapper />
			<Wrapper>
				<div className='container'>
					<div className='ulo-pitch-container'>
						<h1 className='ulo-pitch-header'>
							List your property online in minutes!
						</h1>
						<p className='ulo-detail-pitch'>
							<span>Ulo</span> provides enough value to ensure that our users
							are the <span>most serious</span> property-hunters.
						</p>
						<div className='ulo-ads-container'>
							<img
								src='https://www.clipartmax.com/png/middle/288-2887094_globe-world-computer-icons-clip-art-global-logo-vector-free-download.png'
								alt='globe'
							/>

							<p className='ulo-ads'>
								Join several other users using <span>Ulo</span> to find and
								provide shelters
							</p>
						</div>
					</div>

					<div className='form-wrapper'>
						<div>
							<form onSubmit={onSubmit}>
								{checkName ? (
									<label htmlFor='name'>Full Name</label>
								) : (
									<label htmlFor='signin'>Login</label>
								)}
								<div className='form-container'>
									{checkName && (
										<input
											type='text'
											name='name'
											id='name'
											value={user.value}
											placeholder='John Doe'
											onChange={handleChange}
											required
										/>
									)}
									<input
										type='email'
										name='email'
										value={user.value}
										onChange={handleChange}
										id='email'
										placeholder='Email address'
										required
									/>
									<input
										type='password'
										name='password'
										id='password'
										value={user.value}
										placeholder='password'
										onChange={handleChange}
										required
									/>

									<button
										type='submit'
										className='btn-submit'
									>
										{checkName ? 'Sign Up' : 'Login'}
									</button>
								</div>
								<div className='cta-container'>
									<p className='cta-text'>
										{checkName ? (
											<small>Have an account already?</small>
										) : (
											<small>Sign in</small>
										)}{' '}
									</p>
									<span>
										{checkName ? (
											<Link to='/signin'>Signin</Link>
										) : (
											<Link to='/signup'>Sign Up</Link>
										)}
									</span>
								</div>
							</form>
						</div>
					</div>
				</div>
				<Footer />
			</Wrapper>
		</>
	);
};

export default Signup;

const Wrapper = styled.main`
	display: flex;
	flex-basis: 1;
	margin: 0 auto;
	justify-content: space-between;
	flex-direction: column;
	height: 100vh;
	padding-left: 2rem;
	padding-right: 2rem;
	.ulo-pitch-container {
		display: flex;
		flex-direction: column;
		width: 90%;
		margin: 0 auto;
		background: white;

		justify-content: space-between;
		align-items: center;
		margin-bottom: 2rem;

		.ulo-detail-pitch {
			margin-top: 1.2rem;
			margin-bottom: 1.2rem;
			span {
				color: olivedrab;
			}
		}
		.ulo-pitch-header {
			color: olivedrab;
		}
		.ulo-ads-container {
			display: flex;
			justify-content: space-around;
			align-items: center;
			width: 90%;
			background-color: #f0fcfa;

			opacity: 0.9;
			span {
				color: olivedrab;
			}
			img {
				width: 20%;
				background: white;
				margin-right: 0.5rem;
			}
		}
	}
	/* Form CSS */
	.form-wrapper {
		display: flex;
		width: 100%;
		margin: 0 auto;
		justify-content: space-between;
		align-items: center;
		background-color: #f0fcfa;
		flex-direction: column;
		border-radius: 8px;

		.user-btn {
			margin-bottom: 2rem;
			margin-top: 2rem;
			border: 2px solid olivedrab;
			width: 40%;
			height: 30px;
			display: flex;
			border-radius: 20px;
			justify-content: space-around;
			background-color: white;
			.btn-2 {
				margin: 0.1rem;
				width: 50%;
				border-radius: 20px;
				background-color: olivedrab;
				color: white;
			}
			.btn-1 {
				margin: 0.1rem;
				width: 50%;
				border-radius: 20px;
				border: none;
				background-color: transparent;
				color: olivedrab;
			}
		}
		.form-container {
			display: flex;
			flex-direction: column;
			width: 100%;
			justify-content: space-between;
			align-items: center;
			/* margin: 10px; */
			text-align: left;

			input {
				margin: 15px;
				width: 100%;
				height: 30px;
				border-radius: 8px;
				border: 1px solid gray;
				::placeholder {
					padding: 1rem;
				}
			}
			.btn-submit {
				margin: 10px;
				width: 100%;
				height: 30px;
				border-radius: 4px;
				color: white;
				background-color: olivedrab;
			}
		}
		.cta-container {
			display: flex;
			flex-direction: row;
			margin-bottom: 5rem;
			span,
			p {
				margin-left: 1rem;
				margin-top: 1rem;
			}
		}
	}
	.active {
		color: red;
	}

	@media (min-width: 768px) {
		.container {
			display: flex;
			width: 100%;
			justify-content: space-between;
			align-items: center;
			background-color: olivedrab;
			border-radius: 8px;
			margin-bottom: 20px;
		}
		.ulo-pitch-container {
			padding: 1rem;
		}
		.form-wrapper {
			display: flex;
			width: 100%;
			justify-content: space-between;
			align-items: center;
			margin-left: 20px;
			text-align: left;
			background-color: white;
			.cta-container {
				display: flex;
				flex-direction: row;
				margin-bottom: 20px;
				span {
					margin-left: 2rem;
				}
			}
		}
	}
`;
