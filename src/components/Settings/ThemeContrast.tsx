import {
  alpha,
  createTheme,
  useTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { ChildrenProps } from "../../@interface/ChildProps.interface";
import useSettings from "../../hooks/useSettings";
import { useMemo } from "react";
import ComponentOverrides from "../../utils/overrides/ComponentOverrides";

export default function ThemeContrast({ children }: ChildrenProps) {
  const defaultTheme = useTheme();

  const { themeContrast } = useSettings();

  const isLight = defaultTheme.palette.mode === "light";

  const shadowColor = isLight
    ? defaultTheme.palette.grey[500]
    : defaultTheme.palette.common.black;

  const styles = {
    bgDefault: defaultTheme.palette.background.default,
    bgBold: isLight
      ? defaultTheme.palette.grey[100]
      : defaultTheme.palette.grey[900],
    cardDefault: defaultTheme.components?.MuiCard?.styleOverrides?.root,
    cardBold: {
      zIndex: 0,
      position: "relative",
      borderRadius: Number(defaultTheme.shape.borderRadius) * 2,
      boxShadow: `0 0 1px 0 ${alpha(shadowColor, 0.48)}, 0 2px 4px -1px ${alpha(
        shadowColor,
        0.24
      )}`,
    },
  };

  const themeOptions = useMemo(
    () => ({
      ...defaultTheme,
      palette: {
        ...defaultTheme.palette,
        background: {
          ...defaultTheme.palette.background,
          default: themeContrast === "bold" ? styles.bgBold : styles.bgDefault,
        },
      },
      components: {
        MuiCard: {
          styleOverrides: {
            root:
              themeContrast === "bold" ? styles.cardBold : styles.cardDefault,
          },
        },
      },
    }),
    [
      defaultTheme,
      themeContrast,
      styles.cardBold,
      styles.cardDefault,
      styles.bgBold,
      styles.bgDefault,
    ]
  );

  const theme = createTheme(themeOptions as any);

  theme.components = {
    ...ComponentOverrides(theme),
    MuiCard: themeOptions.components?.MuiCard,
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
