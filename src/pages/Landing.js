import React from "react";
import styled from "styled-components";

import {
  SearchProperty,
  HeroSection,
  NavBarWrapper,
  FeaturedProperty,
  MobileMenu,
  DetailHouse,
} from "../components";

import { useGlobalContext } from "../components/context";
import Footer from "../components/Footer";

function Landing() {
  const { showMenu } = useGlobalContext();

  return (
    <Wrapper>
      <NavBarWrapper />
      <HeroSection />
      <SearchProperty />
      <FeaturedProperty />
      {showMenu && <MobileMenu />}
      <Footer />
    </Wrapper>
  );
}

export default Landing;

const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  margin: auto;
`;
