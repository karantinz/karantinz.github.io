import React from "react";
import { Icon } from "../Icon";
import { animateScroll as scroll } from "react-scroll";
import { S } from "./Logo_styles";

export const Logo = () => {
  return (
    <S.Logo onClick={scroll.scrollToTop}>
      <Icon iconId="logo" width="48px" height="48px" viewBox="0 0 48 48" />
      <span>Portfolio</span>
    </S.Logo>
  );
};
