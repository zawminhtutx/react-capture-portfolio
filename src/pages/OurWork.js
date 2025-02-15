import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
//Animation
import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll";
import {
  slider,
  pageAnimation,
  photoAnim,
  lineAnim,
  CharacterAnim,
  fade
} from "../animation";


const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2,controls2]= useScroll();
  const [element3,controls3]= useScroll();
  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      
      <Movie>
        <motion.h2 variants={CharacterAnim}>The Racer</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to={"/work/the-racer"}>
          <Hide>
            <motion.img variants={photoAnim} src={theracer} alt="racer" />
          </Hide>
        </Link>
      </Movie>
      <Movie ref={element} variants={fade} animate={controls} initial="hidden">
        <motion.h2 variants={CharacterAnim}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to={"/work/the-athlete"}>
          <Hide>
            <motion.img variants={photoAnim} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie ref={element2} variants={fade} animate={controls2} initial="hidden">
        <motion.h2 variants={CharacterAnim} animate="show" initial="hidden">
          The Racher
        </motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to={"/work/the-racer"}>
          <Hide>
            <motion.img variants={photoAnim} src={theracer} alt="athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie ref={element3} variants={fade} animate={controls3} initial="hidden">
        <motion.h2 variants={CharacterAnim} animate="show" initial="hidden">
          The Good Times
        </motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to={"/work/good-times"}>
          <Hide>
            <motion.img variants={photoAnim} src={goodtimes} alt="athlete" />
          </Hide>
        </Link>
      </Movie>

    </Work>
  );
};
const Hide = styled.div`
  overflow: hidden;
`;
const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  background: white;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
    font-weight: 800;
    color: #f75c03;
  }
  @media (max-width: 1080px) {
    padding: 2rem 2rem;
  } 
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    /* background: #04a777; */
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
//Fram Animation
const Frame1 = styled(motion.div)`
  position:fixed;
  left: 0;
  top: 0%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
export default OurWork;
