import React from "react";
import { SectionTitle } from "../../components/SectionTitle";
import { Skill } from "./Skill";
import { FlexWrapper } from "../../components/FlexWrapper";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { Container } from "../../components/Container";

export const Skills = () => {
  return (
    <SectionSkills id="skills">
      <Container>
        <FlexWrapper flexDirection="column">
          <SectionTitle
            title="My Tech Stack"
            subtitle=" Technologies I’ve been working with recently"
          />

          <FlexWrapper gap="50px" flexWrap="wrap" justifyContent="center">
            <Skill icon="js" title="JavaScript" />
            <Skill icon="ts" title="TypeScript" />
            <Skill icon="js" title="JavaScript" />
            <Skill icon="ts" title="TypeScript" />
            <Skill icon="js" title="JavaScript" />
            <Skill icon="ts" title="TypeScript" />
            <Skill icon="js" title="JavaScript" />
            <Skill icon="ts" title="TypeScript" />
            <Skill icon="js" title="JavaScript" />
            <Skill icon="ts" title="TypeScript" />
            <Skill icon="js" title="JavaScript" />
            <Skill icon="ts" title="TypeScript" />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </SectionSkills>
  );
};

const SectionSkills = styled.section`
  margin-bottom: 150px;

  @media ${theme.media.mobile} {
    margin-bottom: 100px;
  }
`;
