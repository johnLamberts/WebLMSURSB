import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import useSettings from "../hooks/useSettings";

export default function TitleHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  const { themeMode } = useSettings();
  const theme = useTheme();

  return (
    <Box alignItems={"flex-start"}>
      <Typography
        variant="h2"
        fontWeight="bold"
        sx={{
          color:
            themeMode === "light"
              ? theme.palette.common.black
              : theme.palette.common.white,
        }}
      >
        {title}
      </Typography>
      <Typography
        pt={"2rem"}
        variant="subtitle2"
        sx={{
          color:
            themeMode === "light"
              ? theme.palette.common.black
              : theme.palette.common.white,
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
}
