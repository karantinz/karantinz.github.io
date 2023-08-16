import React from "react";
import { FlexWrapper } from "../components/FlexWrapper";
import { Logo } from "../components/Logo";
import { ImageBlock } from "../components/ImageBlock";
import { Menu } from "../components/Menu";
import styled from "styled-components";

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterTop>
        <FlexWrapper justifyContent="space-between" alignItems="center">
          <Logo />
          
          <FlexWrapper gap="50px" alignItems="center">
            <FlexWrapper gap="50px">
              <FooterSpan>+ 0 000 00 00</FooterSpan>
              <FooterSpan>mail@mail</FooterSpan>
            </FlexWrapper>
            
            <ImageBlock />
          </FlexWrapper>
        </FlexWrapper>
      </FooterTop>

      <FooterBot>
        <FlexWrapper justifyContent="center">
          <Menu />
        </FlexWrapper>
      </FooterBot>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  margin-bottom: 50px;
`;

const FooterTop = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #42446E;
`;

const FooterBot = styled.div`
  padding-top: 30px;
`;

const FooterSpan = styled.span`
  color: #a7a7a7;
`;
