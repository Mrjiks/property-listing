import React from "react";
import { MobileMenu, NavBarWrapper } from "../components";
import { useGlobalContext } from "../components/context";
import { motion, AnimatePresence } from "framer-motion";
import { LoremIpsum } from "../components/LoremIpsum";
import styled from "styled-components";
import Footer from "../components/Footer";

const Agents = () => {
  const [showMore, setShowMore] = React.useState(false);
  const { showMenu } = useGlobalContext();
  const showInfo = {
    key: "mobile-menu",
    initial: { opacity: 1, x: "-100%" },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.9 } },
  };
  return (
    <Wrapper>
      {showMenu && <MobileMenu />}
      <NavBarWrapper />
      <div className='container'>
        <h1>Welcome to Agent page</h1>

        <LoremIpsum />
        <button type='button' onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show less" : "Show more"}
        </button>

        <AnimatePresence>
          {showMore && (
            <motion.div {...showInfo}>
              <p>start from up and read carefully...</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Agents;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 1;

  margin: 0 auto;
  .container {
    margin: 0 auto;
    width: 90%;

    @media (min-width: 768px) {
      padding-left: 2rem;
      padding-right: 2rem;
      display: flex;
      flex-direction: column;
    }
  }
`;
