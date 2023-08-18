import React from "react";
import { FlexWrapper } from "../components/FlexWrapper";
import { Logo } from "../components/Logo";
import { ImageBlock } from "../components/ImageBlock";
import { Menu } from "../components/Menu/Menu";
import styled from "styled-components";
import { theme } from "../styles/Theme";

const items = ["Home", "Tech Stack", "Projects", "Contact"];

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterTop>
        <FlexWrapper justifyContent="space-between" alignItems="center">
          <Logo />
          
          <FlexWrapper gap="50px" alignItems="center" flexWrap="wrap" justifyContent="center">
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
          <Menu menuItems={items} />
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

  
  @media ${theme.media.mobile} {
    & > ${FlexWrapper} {
      flex-direction: column;
      gap: 50px;
    }
  }
`;

const FooterBot = styled.div`
  padding-top: 30px;

  @media ${theme.media.mobile} {
    display: none;
  }
`;

const FooterSpan = styled.span`
  color: #a7a7a7;
`;
