import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MobileMenu from "./MobileMenu";
import SearchProperty from "./SearchProperty";
import { useGlobalContext } from "./context";
import { featuredHouses } from "../data";
import { useParams } from "react-router-dom";
import NavBarWrapper from "./NavBarWrapper";

const SingleHouse = () => {
  const { showMenu, toggleMenu } = useGlobalContext();
  const { houseId } = useParams();

  const house = featuredHouses.find((house) => house.id == houseId);

  const { imageUrl, title, address, price } = house;
  return (
    <Wrapper>
      <NavBarWrapper />
      <div className='nav-container'>
        {/* <div className='menu-bar' onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div> */}

        <div className='search-input'>
          <SearchProperty />
        </div>
      </div>
      {/* {showMenu && <MobileMenu />} */}
      <div className='search-location'>
        <div>
          <div className='house-card'>
            <div className='img-detail'>
              <img src={imageUrl} alt={title} />
            </div>
          </div>
        </div>
        <div className='card-text'>
          <h3 className='list-header'>Listing Detailed Information:</h3>
          <button>
            38,449 <span>Agents Listings</span>
          </button>
          <button>
            234,449 <span>Other Listings</span>
          </button>
          <span className='date-listed'>6 days on Dream Homes</span>
          <div className='house-info-container'>
            <div className='house-info'>
              <span>4 bds</span>|<span>39 ba</span>|2,168 sqft -House for sale.
            </div>
            <p className='price'>${price}</p>
            <address>location: {address}</address>
          </div>
          <h4>Tour Guide:</h4>
          <p>{house.tour}</p>
          <Link to='/' className='tour'>
            <button type='button'>Book a Tour</button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleHouse;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  .card-text {
  }
  .nav-container {
    display: flex;
    width: 100%;
    height: 80px;
    /* margin-top: -20px; */
    background-color: white;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    .search-location {
      width: 100%;
      display: grid;
      flex-direction: column;
      align-items: start;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
    .list-header {
      margin-top: 2rem;
    }
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
  .search-location {
    padding: 0 16px;
  }
  .img-detail {
    background: #000;
    width: auto;
    img {
      min-width: 100%;
      display: block;
      object-fit: cover;
    }
  }
  .result-filters {
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
  }
  .house-card {
    position: relative;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  }
  .date-listed {
    position: absolute;
    top: 223px;
    left: 18px;
    color: olivedrab;
    background-color: black;
    opacity: 0.7;
  }
  .bookmark {
    position: absolute;
    top: 10px;
    right: 5px;
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
    margin-bottom: 2rem;
  }
`;
