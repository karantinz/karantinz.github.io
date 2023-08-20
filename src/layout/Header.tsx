import React from "react";
import { Logo } from "../components/Logo";
import { Menu } from "../components/Menu/Menu";
import { ImageBlock } from "../components/ImageBlock";
import { FlexWrapper } from "../components/FlexWrapper";
import styled from "styled-components";
import { theme } from "../styles/Theme";
import { MobileMenu } from "../components/Menu/MobileMenu";
import { Container } from "../components/Container";

const items = [
  {
    title: "Tech Stack",
    href: "skills",
  },
  {
    title: "Projects",
    href: "projects",
  },
  {
    title: "Contact",
    href: "contact",
  },
];

const Mobileitems = [
  {
    title: "Home",
    href: "home",
  },
  {
    title: "Tech Stack",
    href: "skills",
  },
  {
    title: "Projects",
    href: "projects",
  },
  {
    title: "Contact",
    href: "contact",
  },
];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justifyContent="space-between" alignItems="center">
          <Logo />

          <FlexWrapper gap="20px" alignItems="center">
            <Menu menuItems={items} />
            <MobileMenu menuItems={Mobileitems} />
            <ImageBlockWrapper>
              <ImageBlock />
            </ImageBlockWrapper>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 50px 0;

  @media ${theme.media.tablet} {
    ${FlexWrapper} {
      flex-direction: column;
      gap: 30px;
    }
  }
`;

const ImageBlockWrapper = styled.div`
  @media ${theme.media.mobile} {
    display: none;
  }
`;
