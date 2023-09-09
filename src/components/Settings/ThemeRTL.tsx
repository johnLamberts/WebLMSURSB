import { useTheme } from "@mui/material";
import { useEffect } from "react";
import { ChildrenProps } from "../../@interface/ChildProps.interface";

import rtlPlugin from "stylis-plugin-rtl";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

export default function ThemeRTL({ children }: ChildrenProps) {
  const defaultTheme = useTheme();

  useEffect(() => {
    document.dir = defaultTheme.direction;
  }, [defaultTheme.direction]);

  const cacheRTL = createCache({
    key: defaultTheme.direction === "rtl" ? "rtl" : "css",
    stylisPlugins: defaultTheme.direction === "rtl" ? [rtlPlugin] : [],
  });
  return <CacheProvider value={cacheRTL}>{children}</CacheProvider>;
}
