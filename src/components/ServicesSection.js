import React from "react";
//importing icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import { StyledAbout, Description, StyledImage } from "../style";
import styled from "styled-components";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";


const ServicesSection = () => {
  const [element, controls]= useScroll();

  return (
    <Services
      ref={element}
      variants={scrollReveal}
      initial="hidden"
      animate={controls}>
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="icon" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="icon" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <StyledImage>
        <img src={home2} alt="camara" />
      </StyledImage>
    </Services>
  );
};
const Services = styled(StyledAbout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1080px) {
    justify-content: center; 
  }
`;
const Card = styled.div`
  flex-basis: 10rem;
  padding-left: 1rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 0.5rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;
export default ServicesSection;
