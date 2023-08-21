import React from "react";
import { Icon } from "../../components/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import styled from "styled-components";

type SkillProps = {
  icon: string;
  title: string;
};

export const Skill = (props: SkillProps) => {
  return (
    <FlexWrapper
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Icon
        iconId={props.icon}
        width="105px"
        height="105px"
        viewBox="0 0 105 105"
      />

      <SkillsSpan>{props.title}</SkillsSpan>
    </FlexWrapper>
  );
};

const SkillsSpan = styled.span`
  display: block;
  margin-top: 10px;
`;
