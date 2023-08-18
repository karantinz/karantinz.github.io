import React from "react";
import { FlexWrapper } from "../components/FlexWrapper";
import Man from "../assets/img/man1.webp";
import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Hero = () => {
  return (
    <SectionHero>
      <FlexWrapper alignItems="center" justifyContent="space-between">
        <HeroLeft>
          <MainTitle>Lorem ipsum dolor amet</MainTitle>

          <Subtitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Subtitle>

          <Button>Download CV</Button>
        </HeroLeft>

        <ImageContainer>
          <Images src={Man} alt="" />
        </ImageContainer>
      </FlexWrapper>
    </SectionHero>
  );
};

const SectionHero = styled.section`
  margin-bottom: 150px;

  @media ${theme.media.tablet} {
    & > ${FlexWrapper} {
      flex-direction: column-reverse;
      gap: 20px;
    }
  }

  @media ${theme.media.mobile} {
    margin-bottom: 100px;
  }
`;

const ImageContainer = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -8px;
    right: -5px;
    background: linear-gradient(
      270deg,
      #13adc7 0%,
      #6978d1 66.67%,
      #945dd6 100%
    );
    border-radius: 50px 0;
    width: 103%;
    height: 465px;
    z-index: -1;
  }
`;

const Images = styled.img`
  max-width: 380px;
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-radius: 50px 0;
`;

const MainTitle = styled.h1`
  font-size: 54px;
  max-width: 670px;

  @media ${theme.media.mobile} {
    font-size: 40px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  max-width: 480px;
  color: #bcbcbc;
  margin-bottom: 35px;
`;

const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Button = styled.button`
  max-width: 240px;
  padding: 15px 50px;
  border: transparent;
  border-radius: 80px;
  background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;
