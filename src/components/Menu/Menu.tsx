import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { ImageBlock } from "../ImageBlock";

export const Menu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href="#">{item}</a>
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

    li > a {
      color: #fff;
      text-decoration: none;
      font-size: 20px;
    }
  }

  @media ${theme.media.mobile} {
    display: none;
  }
`;
