import React from "react";
import home1 from "../img/home1.png";
import { StyledAbout, Description, StyledImage, Hide } from "../style";
import { titleAnim, fade, photoAnim } from "../animation";
import { motion } from "framer-motion";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <StyledAbout>
      <Description>
        <motion.div
          variants={titleAnim}
          initial="hidden"
          animate="show"
          className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> comes
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills
        </motion.p>
        <motion.button>Contact Us</motion.button>
      </Description>
      <StyledImage variants={photoAnim}>
        <motion.img variants={photoAnim} initial="hidden" animate="show" src={home1} alt="guy with a camera" />{" "}
      </StyledImage>
      <Wave/>
    </StyledAbout>
  );
};
export default AboutSection;
