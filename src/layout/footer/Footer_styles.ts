import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { FlexWrapper } from "../../components/FlexWrapper";

const Footer = styled.footer`
  margin-bottom: 50px;
`;

const FooterTop = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #42446e;

  @media ${theme.media.mobile} {
    & > ${FlexWrapper} {
      flex-direction: column;
      gap: 50px;
    }
  }
`;

const FooterBot = styled.div`
  padding-top: 30px;
`;

const FooterSpan = styled.span`
  color: #a7a7a7;
`;

export const S = {
  Footer,
  FooterTop,
  FooterBot,
  FooterSpan,
};
