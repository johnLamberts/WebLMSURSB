import { Avatar, Stack, Toolbar, Typography, useTheme } from "@mui/material";
import { faker } from "@faker-js/faker";
import DarkModeToggle from "../../components/DarkModeToggle";
export default function Header() {
  const theme = useTheme();
  return (
    <Stack
      width={"100%"}
      sx={{
        backgroundColor: theme.palette.primary.main,
        borderRadius: "0.3rem",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "1rem",
        }}
      >
        <Typography variant="subtitle2" noWrap component="div">
          John Lambert P. Asis <br />
          <span
            style={{
              color: `#ffffff95`,
            }}
          >{`< test case lang tong bgColor >`}</span>
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
