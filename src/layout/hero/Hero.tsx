import React from "react";
import { FlexWrapper } from "../../components/FlexWrapper";
import Man from "../../assets/img/man1.webp";
import { Container } from "../../components/Container";
import { S } from "./Hero_styles";

export const Hero = () => {
  return (
    <S.Hero id="home">
      <Container>
        <FlexWrapper alignItems="center" justifyContent="space-between">
          <S.HeroLeft>
            <S.Title>Lorem ipsum dolor amet</S.Title>

            <S.Subtitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </S.Subtitle>

            <S.Button>Download CV</S.Button>
          </S.HeroLeft>

          <S.ImageContainer>
            <S.Images src={Man} alt="" />
          </S.ImageContainer>
        </FlexWrapper>
      </Container>
    </S.Hero>
  );
};
