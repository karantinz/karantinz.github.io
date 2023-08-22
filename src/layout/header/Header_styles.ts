import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { FlexWrapper } from "../../components/FlexWrapper";

const Header = styled.header`
  padding: 50px 0;

  @media ${theme.media.tablet} {
    ${FlexWrapper} {
      flex-direction: column;
      gap: 30px;
    }
  }
`;

export const S = {
  Header,
};
