import React from "react";
import { SectionTitle } from "../../components/sectionTitle/SectionTitle";
import { Skill } from "./Skill";
import { FlexWrapper } from "../../components/FlexWrapper";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { Container } from "../../components/Container";

const skillsData = [
  { icon: "js", title: "JavaScript" },
  { icon: "ts", title: "TypeScript" },
  { icon: "js", title: "JavaScript" },
  { icon: "ts", title: "TypeScript" },
  { icon: "js", title: "JavaScript" },
  { icon: "ts", title: "TypeScript" },
  { icon: "js", title: "JavaScript" },
  { icon: "ts", title: "TypeScript" },
  { icon: "js", title: "JavaScript" },
  { icon: "ts", title: "TypeScript" },
  { icon: "js", title: "JavaScript" },
  { icon: "ts", title: "TypeScript" },
];

export const Skills = () => {
  return (
    <StyledSectionSkills id="skills">
      <Container>
        <FlexWrapper flexDirection="column">
          <SectionTitle
            title="My Tech Stack"
            subtitle=" Technologies I’ve been working with recently"
          />

          <FlexWrapper gap="50px" flexWrap="wrap" justifyContent="center">
            {skillsData.map((skill, index) => (
              <Skill key={index} icon={skill.icon} title={skill.title} />
            ))}
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledSectionSkills>
  );
};

const StyledSectionSkills = styled.section`
  margin-bottom: 150px;

  @media ${theme.media.mobile} {
    margin-bottom: 100px;
  }
`;
