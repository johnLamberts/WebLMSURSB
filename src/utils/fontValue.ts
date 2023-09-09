import { useTheme } from "@mui/material/styles";
import { useWidth } from "../hooks/useWidth";
import { Variant } from "@mui/material/styles/createTypography";

export default function GetFontValue(variant: string | number) {
  const theme = useTheme();

  const breakpoints = useWidth();

  const key = (theme as any).breakpoints.up(
    breakpoints === "xl" ? "lg" : breakpoints
  );

  const hasResponsive =
    variant === "h1" ||
    variant === "h2" ||
    variant === "h3" ||
    variant === "h4" ||
    variant === "h5" ||
    variant === "h6";

  const getFont =
    hasResponsive && theme.typography[variant][key]
      ? theme.typography[variant as Variant][key]
      : theme.typography[variant as Variant];

  const fontSize = remToPx(getFont.fontSize);

  const lineHeight =
    Number((theme as any).typography[variant].lineHeight) * fontSize;

  const { fontWeight } = (theme as any).typography[variant];

  const { letterSpacing } = (theme as any).typography[variant];

  return { fontSize, lineHeight, fontWeight, letterSpacing };
}

export function remToPx(value: string) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({ sm, md, lg }: any) {
  return {
    "@media (min-width: 600px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width: 900px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width: 1200px)": {
      fontSize: pxToRem(lg),
    },
  };
}
