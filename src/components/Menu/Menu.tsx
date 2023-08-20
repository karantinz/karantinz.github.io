import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { Link } from "react-scroll";

type MenuItemsType = {
  title: string;
  href: string;
};

type PropsMenuItemsType = {
  menuItems: Array<MenuItemsType>;
};

export const Menu = (props: PropsMenuItemsType) => {
  return (
    <StyledMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
            <li key={index}>
              <NavLink to={item.href} smooth={true}>{item.title}</NavLink>
            </li>
          );
        })}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;

  ul {
    display: flex;
    gap: 50px;
  }

  @media ${theme.media.mobile} {
    display: none;
  }
`;

const NavLink = styled(Link)`
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
