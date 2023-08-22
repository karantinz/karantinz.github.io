import React from "react";
import { SectionTitle } from "../../components/sectionTitle/SectionTitle";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Project } from "./Project";
import Man from "../../assets/img/man1.webp";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { Container } from "../../components/Container";

const ProjectData = [
  {
    imageUrl: Man,
    title: "Project 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: "HTML , JavaScript, SASS, React",
  },
  {
    imageUrl: Man,
    title: "Project 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: "HTML , JavaScript, SASS, React",
  },
  {
    imageUrl: Man,
    title: "Project 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: "HTML , JavaScript, SASS, React",
  },
];

export const Projects = () => {
  return (
    <SectionProject id="projects">
      <Container>
        <SectionTitle title="Projects" subtitle="Things I’ve built so far" />

        <FlexWrapper gap="50px" justifyContent="center" flexWrap="wrap">
          {ProjectData.map((item, index) => (
            <Project
              key={index}
              imageUrl={item.imageUrl}
              title={item.title}
              text={item.text}
              stack={item.stack}
            />
          ))}
        </FlexWrapper>
      </Container>
    </SectionProject>
  );
};

const SectionProject = styled.section`
  margin-bottom: 150px;

  @media ${theme.media.mobile} {
    margin-bottom: 100px;
  }
`;
