import React from "react";
import { Logo } from "../components/Logo";
import { Menu } from "../components/Menu/Menu";
import { ImageBlock } from "../components/ImageBlock";
import { FlexWrapper } from "../components/FlexWrapper";
import styled from "styled-components";
import { theme } from "../styles/Theme";
import { MobileMenu } from "../components/Menu/MobileMenu";

const items = ["Home", "Tech Stack", "Projects", "Contact"];

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />

      <FlexWrapper gap="20px" alignItems="center">
        <Menu menuItems={items} />
        <MobileMenu menuItems={items} />
        <ImageBlockWrapper>
          <ImageBlock />
        </ImageBlockWrapper>
      </FlexWrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

  @media ${theme.media.tablet} {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 30px;

    & > ${FlexWrapper} {
      flex-direction: column;
    }
  }
`;

const ImageBlockWrapper = styled.div`
  @media ${theme.media.mobile} {
    display: none;
  }
`;
