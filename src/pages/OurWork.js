import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const OurWork = () => {
  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <Movie>
        <h1>The Athlete</h1>
        <div className="line"></div>
          <Link to={"/work/the-athlete"}>
            <img src={athlete} alt="athlete" />
          </Link>
        
      </Movie>
      <Movie>
        <h1>The Racher</h1>
        <div className="line"></div>
          <Link  to={"/work/the-racer"}>
            <img src={theracer} alt="athlete" />
          </Link>
        
      </Movie>
      <Movie>
        <h1>The Good Times</h1>
        <div className="line"></div>
          <Link to={"/work/good-times"}>
            <img src={goodtimes} alt="athlete" />
          </Link>
        
      </Movie>
    </Work>
  );
};
const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h1 {
    padding: 1rem 0rem;
    color: #F75C03;
  }
`;
const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background:#04A777;;
    margin-bottom:3rem;
    ;
    
  }
  img {
    width: 100%;
    height:70vh;
    object-fit  :cover ;
  }
`;
export default OurWork;
