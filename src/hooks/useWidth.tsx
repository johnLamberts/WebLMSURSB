import { useTheme } from "@emotion/react";
import useResponsive from "./useResponsive";

export function useWidth() {
  const theme = useTheme();

  const keys = [...(theme as any).breakpoint.keys].reverse();

  return keys.reduce((output, key) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const matches = useResponsive("up", key);

    return !output && matches ? key : output;
  }, null || "xs");
}
