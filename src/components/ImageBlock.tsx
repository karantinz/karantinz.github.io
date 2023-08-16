import React from "react";
import { Icon } from "./Icon";
import styled from "styled-components";

export const ImageBlock = () => {
  return (
    <StyledImageBlock>
      <a href="">
        <Icon iconId={"github"} />
      </a>
      <a href="">
        <Icon iconId={"linkedin"} />
      </a>
      <a href="">
        <Icon iconId={"telegram"} width="38px" />
      </a>
    </StyledImageBlock>
  );
};

const StyledImageBlock = styled.div`
  display: flex;
  gap: 25px;
`