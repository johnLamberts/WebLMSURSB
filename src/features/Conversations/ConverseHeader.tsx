import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import { faker } from "@faker-js/faker";
import { VideoCamera, Phone, MagnifyingGlass, CaretDown } from "phosphor-react";
import { StyledBadge } from "../../components/StyledBadge";

export default function ConverseHeader() {
  const theme = useTheme() as Theme;

  return (
    <Box
      p={2}
      sx={{
        width: "100%",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#fff"
            : theme.palette.background.default,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
      }}
    >
      <Stack
        alignItems={"center"}
        direction="row"
        justifyContent="space-between"
        sx={{ width: "100%", height: "100%" }}
      >
        <Stack direction="row" spacing={2}>
          <Box>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt={faker.name.fullName()} src={faker.image.avatar()} />
            </StyledBadge>
          </Box>
          <Stack spacing={0.2}>
            <Typography variant="subtitle1">{faker.name.fullName()}</Typography>
            <Typography variant="caption">Online</Typography>
          </Stack>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={3}>
          <IconButton>
            <VideoCamera size={24} />
          </IconButton>
          <IconButton>
            <Phone size={24} />
          </IconButton>
          <IconButton>
            <MagnifyingGlass size={24} />
          </IconButton>

          <Divider orientation="vertical" flexItem />
          <IconButton>
            <CaretDown size={24} />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}
