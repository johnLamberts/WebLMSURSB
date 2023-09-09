import { ThemeProvider, createTheme, useTheme } from "@mui/material";
import { ChildrenProps } from "../../@interface/ChildProps.interface";
import useLocales from "../../hooks/useLocales";

export default function ThemeLocalization({ children }: ChildrenProps) {
  const defaultTheme = useTheme();

  const { currentLang } = useLocales();

  const theme = createTheme(defaultTheme, currentLang.systemValue);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
