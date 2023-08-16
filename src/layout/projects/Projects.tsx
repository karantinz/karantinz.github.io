import React from "react";
import { SectionTitle } from "../../components/SectionTitle";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Project } from "./Project";
import Man from "../../assets/img/man1.webp";
import styled from "styled-components";

export const Projects = () => {
  return (
    <SectionProject>
      <SectionTitle title="Projects" subtitle="Things I’ve built so far" />

      <FlexWrapper justifyContent="space-between" flexWrap="wrap">
        <Project
          imageUrl={Man}
          title="Project 1"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          stack="HTML , JavaScript, SASS, React"
        />
        <Project
          imageUrl={Man}
          title="Project 2"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          stack="HTML , JavaScript, SASS, React"
        />
        <Project
          imageUrl={Man}
          title="Project 3"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          stack="HTML , JavaScript, SASS, React"
        />
      </FlexWrapper>
    </SectionProject>
  );
};

const SectionProject = styled.section`
  margin-bottom: 150px;
`;
