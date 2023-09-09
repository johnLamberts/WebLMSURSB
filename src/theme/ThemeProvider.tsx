import { useMemo } from "react";
import { ChildrenProps } from "../@interface/ChildProps.interface";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import useSettings from "../hooks/useSettings";
import pallete from "./Palette";
import shadows, { customShadows } from "./Shadows";
import breakpoints from "./Breakpoints";
import typography from "./Typography";
import ComponentOverrides from "../utils/overrides/ComponentOverrides";

export default function ThemeProvider({ children }: ChildrenProps) {
  const { themeMode, themeDirection } = useSettings();

  const isLight = themeMode === "light";

  const themeOptions = useMemo(
    () => ({
      palette: isLight ? pallete.light : pallete.dark,
      typography,
      breakpoints,
      shape: { borderRadius: 8 },
      direction: themeDirection,
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight ? customShadows.light : customShadows.dark,
    }),
    [isLight, themeDirection]
  );

  const theme = createTheme(themeOptions as any);

  theme.components = ComponentOverrides(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
