import { theme } from "./Theme";

type FontPropsType = {
  fontFamily?: string;
  weight?: string;
  color?: string;
  lineHeight?: number;
  Fmin?: number;
  Fmax?: number;
};

export const font = ({
  fontFamily,
  weight,
  color,
  lineHeight,
  Fmin,
  Fmax,
}: FontPropsType) => `
    font-family: ${fontFamily || "sans-serif"};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.primaryTextColor};
    line-height: ${lineHeight || 1.2};
    font-size: calc((100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`;
