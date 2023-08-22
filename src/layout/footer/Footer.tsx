import React from "react";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Logo } from "../../components/logo/Logo";
import { ImageBlock } from "../../components/imageBlock/ImageBlock";
import { Container } from "../../components/Container";
import { DesktopMenu } from "../../components/Menu/desktopMenu/DesktopMenu";
import { S } from "./Footer_styles";

const FooterMenuItems = [
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

export const Footer: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 576;

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <S.Footer>
      <Container>
        <S.FooterTop>
          <FlexWrapper justifyContent="space-between" alignItems="center">
            <Logo />

            <FlexWrapper
              gap="50px"
              alignItems="center"
              flexWrap="wrap"
              justifyContent="center"
            >
              <FlexWrapper gap="50px">
                <S.FooterSpan>+ 0 000 00 00</S.FooterSpan>
                <S.FooterSpan>mail@mail</S.FooterSpan>
              </FlexWrapper>

              <ImageBlock />
            </FlexWrapper>
          </FlexWrapper>
        </S.FooterTop>

        {width > breakpoint && (
          <S.FooterBot>
            <FlexWrapper justifyContent="center">
              <DesktopMenu menuItems={FooterMenuItems} />
            </FlexWrapper>
          </S.FooterBot>
        )}
      </Container>
    </S.Footer>
  );
};
