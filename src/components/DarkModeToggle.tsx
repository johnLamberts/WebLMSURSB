import { IconButton, Tooltip, useTheme } from "@mui/material";
import { Moon, SunDim } from "phosphor-react";
import useSettings from "../hooks/useSettings";

export default function DarkModeToggle() {
  const theme = useTheme();
  const { onToggleMode, themeMode } = useSettings();
  return (
    <>
      <Tooltip placement="bottom" title="Toggle Mode">
        <IconButton
          onClick={onToggleMode}
          sx={{
            backgroundColor: `${
              themeMode === "light"
                ? "transparent"
                : theme.palette.background.paper
            }`,
            color: themeMode === "light" ? "#00000080" : "#ffffff",
          }}
        >
          {themeMode === "light" ? (
            <Moon style={{ fontWeight: "700", fontSize: "1.5rem" }} />
          ) : (
            <SunDim />
          )}
        </IconButton>
      </Tooltip>
    </>
  );
}
