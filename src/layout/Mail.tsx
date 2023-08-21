import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../components/FlexWrapper";
import { theme } from "../styles/Theme";
import { Container } from "../components/Container";

export const Mail = () => {
  return (
    <SectionMail id="contact">
      <Container>
        <FlexWrapper justifyContent="center">
          <MailTitle>
            For any questions please mail me: <StyledSpan>mail@mail</StyledSpan>
          </MailTitle>
        </FlexWrapper>
      </Container>
    </SectionMail>
  );
};

const SectionMail = styled.section`
  margin-bottom: 150px;

  @media ${theme.media.mobile} {
    margin-bottom: 100px;
  }
`;

const MailTitle = styled.h2`
  font-size: 58px;
  font-weight: 700;
  line-height: 70px;
  max-width: 960px;
  text-align: center;

  @media ${theme.media.mobile} {
    font-size: 10vw;
  }
`;

const StyledSpan = styled.span`
  background: var(
    --gradient-heading,
    linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;