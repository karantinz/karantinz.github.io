import React from "react";
import { Icon } from "../../components/Icon";
import { S } from "./Project_styles";

type PropsProjectType = {
  imageUrl: string;
  title: string;
  text: string;
  stack: string;
};

export const Project = (props: PropsProjectType) => {
  return (
    <S.Project>
      <S.ProjectImage src={props.imageUrl} alt="" />
      <S.ProjectTitle>{props.title}</S.ProjectTitle>
      <S.ProjectText>{props.text}</S.ProjectText>
      <S.ProjectSubtitle>Tech Stack: {props.stack}</S.ProjectSubtitle>
      <S.ProjectLink href="">
        <Icon iconId="github" width="24" height="24" />
        View Code
      </S.ProjectLink>
    </S.Project>
  );
};
