import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MobileMenu, NavBarWrapper } from "../components";
import { useGlobalContext } from "../components/context";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialLogin from "../components/SocialLogin";

const SignIn = () => {
  const { showMenu } = useGlobalContext();
  const [checkName] = React.useState(false);
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = JSON.parse(localStorage.getItem("user"));
    if (user.email === newUser.email && user.password === newUser.password) {
      toast.success("Logged in successfully", { draggable: true, progress: 2 });
      setInterval(() => {
        window.location = "/dashboard";
      }, 3000);
    } else {
      toast.error("Wrong details");
    }
  };
  return (
    <>
      <ToastContainer position='top-center' autoClose={5000} theme='dark' />
      {showMenu && <MobileMenu />}
      <NavBarWrapper />
      <Wrapper>
        <div className='container'>
          <div className='ulo-pitch-container'>
            <h1 className='ulo-pitch-header'>List your property online in minutes!</h1>
            <p className='ulo-detail-pitch'>
              <span>Dream Homes</span> provides enough value to ensure that our users are the{" "}
              <span>most serious</span> property-hunters.
            </p>
            <div className='ulo-ads-container'>
              <img
                src='https://www.clipartmax.com/png/middle/288-2887094_globe-world-computer-icons-clip-art-global-logo-vector-free-download.png'
                alt='globe'
              />

              <p className='ulo-ads'>
                Join several other users using <span>Dream Homes</span> to find and provide shelters
              </p>
            </div>
          </div>

          <div className='form-wrapper'>
            <div>
              <form onSubmit={onSubmit}>
                <div className='form-container'>
                  <label htmlFor='signin'>View Dashboard</label>
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

                  <button type='submit' className='btn-submit'>
                    {checkName ? "Sign up" : "Login"}
                  </button>
                  <SocialLogin />
                  <div className='cta-container'>
                    <p className='cta-text'>
                      {!checkName ? <small>No Account yet?</small> : <small>Sign in</small>}{" "}
                    </p>
                    <span>
                      {checkName ? (
                        <Link to='/signup'>Sign Up</Link>
                      ) : (
                        <Link to='/signup'>Sign up</Link>
                      )}
                    </span>
                  </div>
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

export default SignIn;

const Wrapper = styled.main`
  display: flex;
  width: 100;
  margin: 0 auto;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;

  .ulo-pitch-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding-left: 2rem;
    padding-right: 2rem;

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
      margin: 0 auto;

      background-color: #f0fcfa;
      border-radius: 8px;
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
    justify-content: space-between;
    align-items: center;
    background-color: #f0fcfa;
    flex-direction: column;
    border-radius: 8px;

    .form-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      text-align: left;

      input {
        margin: 15px;
        width: 200px;
        height: 30px;
        border-radius: 8px;
        border: 1px solid gray;
        ::placeholder {
          padding: 1rem;
        }
      }
      .btn-submit {
        margin: 10px;
        width: 200px;
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
      width: 90%;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      margin-bottom: 20px;
    }
    .ulo-pitch-container {
      margin: 2rem auto;
      width: 90%;
      padding: 2rem;
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
  @media (orientation: landscape) {
    .user-btn {
      margin-bottom: 2rem;
      margin-top: 2rem;
      border: 2px solid olivedrab;
      /* width: 50%; */
      height: 30px;
      display: flex;
      border-radius: 20px;
      justify-content: space-around;
      background-color: white;
      .btn-2 {
        margin: 0.1rem;
        width: 10%;
        border-radius: 20px;
        background-color: olivedrab;
        color: white;
      }
      .btn-1 {
        margin: 0.1rem;
        /* width: 10%; */
        border-radius: 20px;
        border: none;
        background-color: transparent;
        color: olivedrab;
      }
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
