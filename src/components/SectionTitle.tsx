import React from "react";
import styled from "styled-components";
import { theme } from "../styles/Theme";
import Typewriter from "typewriter-effect";

type SectionTitleType = {
  title: string;
  subtitle: string;
};

export const SectionTitle = (props: SectionTitleType) => {
  return (
    <StyledSection>
      <StyledTitle>
        <Typewriter
          options={{
            strings: [props.title],
            autoStart: true,
            loop: false,
            deleteSpeed: Infinity,
          }}
        />
      </StyledTitle>
      <StyledSubtitle>{props.subtitle}</StyledSubtitle>
    </StyledSection>
  );
};

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  text-align: center;
  margin-bottom: 50px;
`;

const StyledTitle = styled.h2`
  font-size: 48px;
  font-weight: bold;
  color: #ccc;

  @media ${theme.media.mobile} {
    font-size: 40px;
  }
`;

const StyledSubtitle = styled.span`
  font-size: 32px;
  color: #a7a7a7;

  @media ${theme.media.mobile} {
    font-size: 25px;
  }
`;
