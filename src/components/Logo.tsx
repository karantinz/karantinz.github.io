import React from "react";
import { Icon } from "./Icon";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";

export const Logo = () => {
  return (
    <StyledIcon>
      <a onClick={scroll.scrollToTop}>
        <Icon iconId="logo" width="48px" height="48px" viewBox="0 0 48 48" />
        <span>Portfolio</span>
      </a>
    </StyledIcon>
  );
};

const StyledIcon = styled.div`
  a {
    display: flex;
    align-items: center;
    color: #fff;
    text-decoration: none;
    font-size: 30px;
    gap: 13px;
    cursor: pointer;
  }
`;
