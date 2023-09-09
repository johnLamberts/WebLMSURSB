import { Avatar, Stack, Toolbar, Typography } from "@mui/material";
import { faker } from "@faker-js/faker";
import DarkModeToggle from "../../components/DarkModeToggle";
export default function Header() {
  return (
    <Stack
      width={"100%"}
      sx={
        {
          // backgroundColor: "red",
        }
      }
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "1rem",
        }}
      >
        <Typography variant="subtitle2" noWrap component="div">
          John Lambert P. Asis
        </Typography>
        <Avatar
          src={faker.image.avatar()}
          id="basic-button"
          // aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          // aria-expanded={open ? "true" : undefined}
          // onClick={handleClick}
        />

        <DarkModeToggle />
      </Toolbar>
    </Stack>
  );
}
