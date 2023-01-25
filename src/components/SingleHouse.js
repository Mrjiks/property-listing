import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MobileMenu from "./MobileMenu";
import SearchProperty from "./SearchProperty";
import { useGlobalContext } from "./context";
import { featuredHouses } from "../data";
import { useParams } from "react-router-dom";

const SingleHouse = () => {
  const { showMenu, toggleMenu } = useGlobalContext();
  const { houseId } = useParams();

  const house = featuredHouses.find((house) => house.id == houseId);

  const { imageUrl, title, address, price } = house;
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
                <img src={imageUrl} alt={title} />
              </div>

              <span className='date-listed'>6 days on Dream Homes</span>
              <span className='bookmark'>❤️</span>
              <p className='price'>${price}</p>
              <div className='house-info-container'>
                <div className='house-info'>
                  <span>4 bds</span>|<span>33 ba</span>|2,168 sqft -House for sale.
                </div>
                <address>{address}</address>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4>Tour Guide:</h4>
          <p>{house.tour}</p>
        </div>
      </div>

      <Link to='/' className='tour'>
        <button type='button'>Book a Tour</button>
      </Link>
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
  .nav-container {
    display: flex;
    width: 100%;
    height: 80px;
    padding: 6px;
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
  .search-location {
    padding: 0 16px;
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
    left: 5px;
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
  }
`;
