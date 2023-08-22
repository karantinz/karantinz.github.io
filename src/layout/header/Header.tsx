import React from "react";
import { Logo } from "../../components/logo/Logo";
import { DesktopMenu } from "../../components/Menu/desktopMenu/DesktopMenu";
import { ImageBlock } from "../../components/imageBlock/ImageBlock";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MobileMenu } from "../../components/Menu/mobileMenu/MobileMenu";
import { Container } from "../../components/Container";
import { S } from "./Header_styles";

const HeaderMenuItems = [
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

export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 576;

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <S.Header>
      <Container>
        <FlexWrapper justifyContent="space-between" alignItems="center">
          <Logo />

          <FlexWrapper gap="20px" alignItems="center">
            {width <= breakpoint ? (
              <MobileMenu />
            ) : (
              <DesktopMenu menuItems={HeaderMenuItems} />
            )}

            {width > breakpoint && <ImageBlock />}
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
