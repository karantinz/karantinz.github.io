import styled from "styled-components";
import { font } from "../../styles/Common";
import { theme } from "../../styles/Theme";

const Logo = styled.a`
  ${font({ Fmax: 30, Fmin: 30, color: theme.colors.primaryTextColor })}
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 13px;
  cursor: pointer;
`;

export const S = {
  Logo,
};
