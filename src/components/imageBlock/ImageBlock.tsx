import React from "react";
import { Icon } from "../Icon";
import { S } from "./ImageBlock_styles";

export const ImageBlock = () => {
  return (
    <S.ImageBlock>
      <a href="">
        <Icon iconId={"github"} />
      </a>
      <a href="">
        <Icon iconId={"linkedin"} />
      </a>
      <a href="">
        <Icon iconId={"telegram"} width="38px" />
      </a>
    </S.ImageBlock>
  );
};
