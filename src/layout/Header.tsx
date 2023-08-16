import React from "react";
import { Logo } from "../components/Logo";
import { Menu } from "../components/Menu";
import { ImageBlock } from "../components/ImageBlock";
import { FlexWrapper } from "../components/FlexWrapper";
import styled from "styled-components";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />

      <FlexWrapper alignItems="center" gap="40px">
        <Menu />
        <ImageBlock />
      </FlexWrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 50px;
  margin-bottom: 50px;
`;
