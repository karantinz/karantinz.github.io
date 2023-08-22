import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";

const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  background-color: #0f1624;
  border-radius: 10px 10px 0 0;
  padding: 10px 10px 50px;
`;

const ProjectImage = styled.img`
  border-radius: inherit;
  max-width: 376px;
  width: 100%;
  min-height: 265px;
  object-fit: cover;
`;

const ProjectTitle = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 30px;
  font-weight: 600;
  max-width: 160px;

  &::after {
    content: "";
    display: block;
    width: 180px;
    height: 3px;
    background: linear-gradient(
      270deg,
      #13adc7 0%,
      #6978d1 66.67%,
      #945dd6 100%
    );
    margin-top: 20px;
  }
`;

const ProjectText = styled.p`
  ${font({ Fmax: 18, Fmin: 16, weight: "500" })}
  max-width: 360px;
  margin-right: auto;
`;

const ProjectSubtitle = styled.span`
  ${font({
    Fmax: 16,
    Fmin: 14,
    weight: "300",
    color: theme.colors.secondaryTextColor,
  })}
  max-width: 330px;
  margin-right: auto;
`;

const ProjectLink = styled.a`
  ${font({ Fmax: 16, Fmin: 16, weight: "400", color: theme.colors.primaryTextColor })}
  display: flex;
  align-items: center;
  text-align: center;
  text-decoration: underline;
  gap: 10px;
  margin-top: 20px;
`;

export const S = {
  Project,
  ProjectImage,
  ProjectTitle,
  ProjectText,
  ProjectSubtitle,
  ProjectLink,
};
