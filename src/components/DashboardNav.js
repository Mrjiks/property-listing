import { Link } from "react-router-dom";
import styled from "styled-components";
// import profile from "./images/profile-circled.png";

const DashboardNav = () => {
  return (
    <Wrapper>
      <Link to='/'>Home</Link>
      <div className='user-profile'>
        <p>UserName</p>
        <img src='ulo-africa\src\images\profile-circled.png' alt='' />
      </div>
    </Wrapper>
  );
};

export default DashboardNav;
const Wrapper = styled.div`
  display: flex;
  flex-basis: 1;
  justify-content: space-around;
  margin: 0 auto;
  .user-profile {
    display: flex;
    p {
      margin-right: 1rem;
    }
  }
`;
