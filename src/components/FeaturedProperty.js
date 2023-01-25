import styled, { keyframes } from "styled-components";
import { featuredHouses } from "../data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FeaturedProperty = () => {
  return (
    <StyledFeaturedWrapper>
      <div className='featured-info'>
        <h2 className='featured-header'>Featured properties</h2>
        <p className='feature-more-info'>Newly verified realtors and property developers.</p>
        <div className='adv-container'>
          <p className='adv'>Advertize with us today!</p>
        </div>
      </div>

      <div className='featured-container'>
        {featuredHouses.map((house) => {
          const { title, imageUrl, price, address, id, tag } = house;

          return (
            <div className='featured-house' key={id} {...house}>
              <img src={imageUrl} alt={title} />
              <div className='featured-details'>
                <p className='property-location'>{address}</p>
                <p>{title}</p>
                <div className='price-info'>
                  <motion.p
                    className='price'
                    whileHover={{
                      scale: 1.1,
                      textShadow: "0px 0px 8px rgb(255,255,255)",
                      boxShadow: "0px 0px 8px rgb(255,255,255)",
                    }}>
                    N{price}
                  </motion.p>
                  <p className='tag'>{tag}</p>
                </div>
                <Link to={`/search/${house.id}`}>more info</Link>
              </div>
            </div>
          );
        })}
      </div>
    </StyledFeaturedWrapper>
  );
};
export default FeaturedProperty;

const move = keyframes`
    from{
        transform: translateX(1px);
    }
    
    to{
        transform: translateX(10%);
    }
`;
const StyledFeaturedWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin: 0 auto;
  width: 100%;
  gap: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  overflow: hidden;

  .featured-info {
    text-align: left;
    margin: 1rem;
  }
  .featured-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    margin: 0 auto;
  }
  .adv-container {
    width: 100%;
    margin: 1rem;
  }
  .adv {
    color: red;
    width: 100%;
    margin-right: 20px;
    animation: ${move} 6s linear infinite;
  }
  .featured-details {
    border-radius: 8px;
    height: auto;
    background: olivedrab;
    color: white;
    transition: all 1s linear;
    padding: 0.5rem;
    width: 100%;
    margin: 1.2rem auto;
  }
  .featured-details:hover {
    background: white;
    color: olivedrab;
    transform: scale(1, 1);
  }

  .price-info {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    margin-top: 10px;
    padding: 0.5rem;
    .price {
      background-color: orangered;
      padding: 0.2rem;
      border-radius: 10px;
    }
  }
  .tag {
    color: orangered;
    background-color: oldlace;
    border-radius: 4px;
    padding: 0.2rem;
  }

  @media (min-width: 768px) {
    padding-left: 4rem;
    padding-right: 4rem;
    .featured-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
  }
  @media (min-width: 1024px) {
    .featured-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }
  }
`;
