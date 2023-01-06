import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "./context";

const MobileMenuLink = ({ path, text }) => {
  const { toggleMenu, showMenu } = useGlobalContext();

  return (
    <Wrapper>
      <Link to={path} onClick={() => toggleMenu()} className="link">
        {text}
      </Link>
    </Wrapper>
  );
};

export default MobileMenuLink;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  .link {
    padding: 1rem;
  }
`;
