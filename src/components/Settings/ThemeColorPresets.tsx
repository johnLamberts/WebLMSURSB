import { ChildrenProps } from "../../@interface/ChildProps.interface";
import {
  ThemeProvider,
  alpha,
  createTheme,
  useTheme,
} from "@mui/material/styles";
import useSettings from "../../hooks/useSettings";
import { useMemo } from "react";
import ComponentOverrides from "../../utils/overrides/ComponentOverrides";

export default function ThemeColorPresets({ children }: ChildrenProps) {
  const defaultTheme = useTheme();

  const { setColor } = useSettings();

  const themeOptions = useMemo(
    () => ({
      ...defaultTheme,
      palette: {
        ...defaultTheme.palette,
        primary: setColor,
      },
      customShadows: {
        ...(defaultTheme as any).customShadows,
        primary: `0 8px 16px 0 ${alpha(setColor.main, 0.24)} `,
      },
    }),
    [setColor, defaultTheme]
  );

  const theme = createTheme(themeOptions);

  theme.components = ComponentOverrides(theme);

  return <ThemeProvider theme={theme}>{children} </ThemeProvider>;
}
