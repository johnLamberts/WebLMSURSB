import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";

export default function useResponsive(
  query?: any,
  key?: any,
  start?: any,
  end?: any
) {
  const theme = useTheme();

  const mediaUp = useMediaQuery((theme as any).breakpoints.up(key));

  const mediaDown = useMediaQuery((theme as any).breakpoints.down(key));

  const mediaBetween = useMediaQuery(
    (theme as any).breakpoints.between(start, end)
  );

  const mediaOnly = useMediaQuery((theme as any).breakpoints.only(key));

  if (query === "up") return mediaUp;

  if (query === "down") return mediaDown;
  if (query === "between") return mediaBetween;
  if (query === "only") return mediaOnly;

  return null;
}
