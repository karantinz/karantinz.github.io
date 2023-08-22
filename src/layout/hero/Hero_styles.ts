import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { FlexWrapper } from "../../components/FlexWrapper";
import { font } from "../../styles/Common";

const Hero = styled.section`
  margin-bottom: 150px;

  @media ${theme.media.tablet} {
    ${FlexWrapper} {
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
    background: ${theme.colors.secondaryBg};
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

const Title = styled.h1`
  ${font({ weight: "bold", Fmax: 54, Fmin: 40 })}

  max-width: 670px;
`;

const Subtitle = styled.p`
  ${font({ Fmax: 18, Fmin: 18, color: "#bcbcbc" })}

  max-width: 480px;
  margin-bottom: 35px;
`;

const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Button = styled.button`
  ${font({ weight: "600", Fmax: 20, Fmin: 20 })}

  max-width: 240px;
  padding: 15px 50px;
  border: transparent;
  border-radius: 80px;
  background: ${theme.colors.secondaryBg};
  text-align: center;
  cursor: pointer;
`;

export const S = {
  Hero,
  ImageContainer,
  Images,
  Title,
  Subtitle,
  HeroLeft,
  Button,
};
