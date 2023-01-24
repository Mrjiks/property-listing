import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MobileMenu from "./MobileMenu";
import SearchProperty from "./SearchProperty";
import { useGlobalContext } from "../components/context";

const DetailsHouse = () => {
  const { showMenu, toggleMenu } = useGlobalContext();
  return (
    <Wrapper>
      <div className='nav-container'>
        <div className='menu-bar' onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className='search-input'>
          <SearchProperty />
        </div>
      </div>
      {showMenu && <MobileMenu />}
      <div className='search-location'>
        <h3>Listing Detailed Information:</h3>
        <div>
          <button>
            38,449 <span>Agents Listings</span>
          </button>
          <button>
            234,449 <span>Other Listings</span>
          </button>
          <div className='house-card'>
            <div>
              <div className='img-detail'>
                <img
                  src='https://www.mydomaine.com/thmb/dke2LC6lH21Pvqwd2lI6AIutnDY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SuCasaDesign-Modern-9335be77ca0446c7883c5cf8d974e47c.jpg'
                  alt='house'
                />
              </div>

              <span className='date-listed'>6 days on Dream Homes</span>
              <span className='bookmark'>❤️</span>
              <p className='price'>$5990.00</p>
              <div className='house-info-container'>
                <div className='house-info'>
                  <span>4 bds</span>|<span>33 ba</span>|2,168 sqft -House for sale.
                </div>
                <address>24888 Bauch Burg</address>
                <Link to='/dashboard' className='tour'>
                  <button type='button'>Book a Tour</button>
                </Link>
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
    height: 80px;
    background-color: olivedrab;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }
  .menu-bar div {
    display: flex;
    border: 1px solid white;
    width: 50px;
    margin: 0.7rem;
  }

  .search-input {
    height: auto;
    width: 100%;
  }

  .img-detail img {
    max-width: 100%;
    display: block;
    object-fit: cover;
  }
  .result-filters {
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
  .house-card {
    position: relative;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  }
  .date-listed {
    position: absolute;
    top: 10px;
    left: 0;
    color: olivedrab;
    background-color: black;
    opacity: 0.7;
  }
  .bookmark {
    position: absolute;
    top: 10px;
    right: 0;
    color: olivedrab;
  }
  .price {
    color: olivedrab;
    font-weight: bold;
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
  }

  .house-info-container {
    display: flex;
    flex-direction: column;
  }
  .house-info span {
    margin: 0.25rem;
  }
  .tour button {
    width: 30%;
    height: 30px;
    margin-top: 1rem;
    color: white;
    background-color: olivedrab;
    border-radius: 4px;
  }
`;
