import styled from "styled-components";
import { theme } from "../../styles/Theme";

const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  text-align: center;
  margin-bottom: 50px;
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: bold;
  color: #ccc;

  @media ${theme.media.mobile} {
    font-size: 40px;
  }
`;

const Subtitle = styled.span`
  font-size: 32px;
  color: #a7a7a7;

  @media ${theme.media.mobile} {
    font-size: 25px;
  }
`;

export const S = {
  SectionTitle,
  Title,
  Subtitle,
};
