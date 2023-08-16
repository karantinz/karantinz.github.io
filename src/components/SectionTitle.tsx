import React from "react";
import styled from "styled-components";

type SectionTitleType = {
  title: string;
  subtitle: string;
};

export const SectionTitle = (props: SectionTitleType) => {
  return (
    <StyledSection>
      <StyledTitle>{props.title}</StyledTitle>
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
`;

const StyledSubtitle = styled.span`
  font-size: 32px;
  color: #a7a7a7;
`;
