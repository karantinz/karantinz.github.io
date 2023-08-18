import React from "react";
import { FlexWrapper } from "../../components/FlexWrapper";
import styled from "styled-components";
import { Icon } from "../../components/Icon";
import { theme } from "../../styles/Theme";

type PropsProjectType = {
  imageUrl: string;
  title: string;
  text: string;
  stack: string;
};

export const Project = (props: PropsProjectType) => {
  return (
    <StyledProject>
      <StyledImage src={props.imageUrl} alt="" />
      <StyledTitle>{props.title}</StyledTitle>
      <StyledText>{props.text}</StyledText>
      <StyledSubtitle>Tech Stack: {props.stack}</StyledSubtitle>
      <StyledLink href="">
        <Icon iconId="github" width="24" height="24" />
        View Code
      </StyledLink>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  background-color: #0f1624;
  color: #fff;
  border-radius: 10px 10px 0 0;
  padding: 10px 10px 50px;
`;

const StyledImage = styled.img`
  border-radius: inherit;
  max-width: 376px;
  width: 100%;
  min-height: 265px;
  object-fit: cover;
`;

const StyledTitle = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 30px;
  font-weight: 600;
  max-width: 160px;

  &::after {
    content: "";
    display: block;
    width: 180px;
    height: 3px;
    background: linear-gradient(
      270deg,
      #13adc7 0%,
      #6978d1 66.67%,
      #945dd6 100%
    );
    margin-top: 20px;
  }

  @media ${theme.media.mobile} {
    font-size: 25px;
  }
`;

const StyledText = styled.p`
  font-size: 18px;
  max-width: 360px;
  font-weight: 500;
  margin-right: auto;

  @media ${theme.media.mobile} {
    font-size: 16px;
  }
`;

const StyledSubtitle = styled.span`
  font-size: 16px;
  font-weight: 300;
  color: #ccc;
  max-width: 330px;
  margin-right: auto;

  @media ${theme.media.mobile} {
    font-size: 14px;
  }
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 400;

  color: #fff;
  text-align: center;
`;
