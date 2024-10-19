import React from "react";
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <StyleContact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "white" }}>
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch!</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send Us A Message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send an Email</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Social Media</h2>
          </Social>
        </Hide>
      </div>
    </StyleContact>
  );
};
const StyleContact = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1080px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  h2 {
    margin-bottom: 2rem;
    color: black;
  }
  @media (max-width: 1080px) {
    margin-top: 5rem; 
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background: #353535;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
    color: black;
  }
`;
export default ContactUs;
