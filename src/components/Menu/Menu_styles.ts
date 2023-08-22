import styled, { css } from "styled-components";
import { Link } from "react-scroll";
import { theme } from "../../styles/Theme";

const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;

  @media ${theme.media.mobile} {
    display: block;
  }
`;

const MenuWrapper = styled.ul`
  display: flex;
  gap: 50px;

  @media ${theme.media.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
`;

const MenuLink = styled(Link)`
  position: relative;
  color: #fff;
  font-size: 20px;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #fff;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: none;
  background-color: rgba(0, 0, 0, 0.8);

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      flex-direction: column;
      gap: 20px;
      justify-content: center;
      align-items: center;
    `}
`;

const BurgerMenu = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  background-color: transparent;
  border: transparent;
  z-index: 11;

  span {
    position: absolute;
    left: 40px;
    bottom: 50px;
    display: block;
    width: 36px;
    height: 2px;
    background-color: #fff;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: transparent;
      `}

    &::before {
      content: "";
      position: absolute;
      display: block;
      width: 36px;
      height: 2px;
      background-color: #fff;
      transform: translateY(-10px);
      transition: transform 0.3s ease;

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-40deg) translateY(0);
        `}
    }

    &::after {
      content: "";
      position: absolute;
      display: block;
      width: 24px;
      height: 2px;
      background-color: #fff;
      transform: translateY(10px);
      transition: transform 0.3s ease;

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          width: 36px;
          transform: rotate(40deg) translateY(0);
        `}
    }
  }
`;

export const S = {
  MenuLink,
  NavMenu,
  MobileMenuPopup,
  BurgerMenu,
  MenuWrapper,
};
