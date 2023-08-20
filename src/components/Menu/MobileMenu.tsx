import React, { useState } from "react";
import styled, { css } from "styled-components";
import { theme } from "../../styles/Theme";
import { ImageBlock } from "../ImageBlock";
import { Link } from "react-scroll";

type MobileMenuType = {
  title: string;
  href: string;
};

type MobilePropsType = {
  menuItems: Array<MobileMenuType>;
};

export const MobileMenu = (props: MobilePropsType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledMenu>
      <BurgerMenu isOpen={isOpen} onClick={closeMenu}>
        <span></span>
      </BurgerMenu>

      <MobileMenuPopup isOpen={isOpen} onClick={closeMenu}>
        <ul>
          {props.menuItems.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={item.href} smooth={true}>
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <ImageBlock />
      </MobileMenuPopup>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  display: none;

  @media ${theme.media.mobile} {
    display: block;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  font-size: 20px;
`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: none;
  background-color: rgba(0, 0, 0, 0.5);

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      flex-direction: column;
      gap: 20px;
      justify-content: center;
      align-items: center;
    `}

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
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
