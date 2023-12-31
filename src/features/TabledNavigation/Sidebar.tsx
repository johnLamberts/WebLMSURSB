// import { faker } from "@faker-js/faker";
import {
  IconButton,
  Divider,
  // Avatar,
  Stack,
  Box,
  useTheme,
  Theme,
  Tooltip,
  // // MenuItem,
  // Menu,
  styled,
  Typography,
} from "@mui/material";
import {
  Archive,
  // ArrowArcLeft,
  ArrowLeft,
  ArrowRight,
  Books,
  // ChatCircleDots,
  FileDoc,
  Gear,
  Graph,
  List,
  Notebook,
  // Phone,
  Users,
} from "phosphor-react";
// import { AntSwitch } from "../../components/AntSwitch";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import useSettings from "../../hooks/useSettings";
//
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const navButtons = [
  {
    index: 0,
    name: "Dashboard",
    path: "/app",
    icon: <Graph />,
  },
  {
    index: 1,
    name: "Students Management",
    path: "/students",
    icon: <Users />,
  },
  {
    index: 2,
    name: "Books Management",
    path: "/books",
    icon: <Books />,
  },
  {
    index: 3,
    name: "Documents Management",
    path: "/sample",
    icon: <FileDoc />,
  },

  {
    index: 4,
    name: "Archive",
    path: "",
    icon: <Archive />,
  },

  {
    index: 5,
    name: "Activity Log",
    icon: <Notebook />,
  },
];

// const profileMenu = [
//   {
//     title: "Profile",
//     icon: <User />,
//   },
//   {
//     title: "Settings",
//     icon: <Gear />,
//   },
//   {
//     title: "Logout",
//     icon: <SignOut />,
//   },
// ];

export default function Sidebar({
  handleDrawerOpen,
  open,
  handleDrawerClose,
}: any) {
  const theme = useTheme() as Theme;
  const location = useLocation();

  const getIndex = navButtons
    .filter((item) => (item.path === location.pathname ? item.index : 0))
    .map((item) => item.index);
  const [selected, setSelected] = useState<number>(getIndex[0]);

  const getSettings = navButtons.length - 1;

  return (
    <Box
      p={2}
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: `0px 0px 2px rgba(0,0,0,0.25)`,
        minHeight: "100vh",
        width: 100,
      }}
    >
      <Stack sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            right: "-30%",
            top: "1.2rem",

            borderRadius: "50%",

            ...(open && { backgroundColor: "ffffff50" }),
          }}
        >
          {open && (
            <DrawerHeader sx={{ position: "relative" }}>
              <IconButton
                onClick={handleDrawerClose}
                sx={{ position: "absolute", right: "-11rem", top: "-0.5rem" }}
              >
                {theme.direction === "rtl" ? <ArrowRight /> : <ArrowLeft />}
              </IconButton>
            </DrawerHeader>
          )}
        </Box>
      </Stack>
      <Stack
        direction="column"
        alignItems={"center"}
        justifyContent="space-between"
        sx={{ height: "90vh" }}
        spacing={3}
      >
        <Stack alignItems={"center"} spacing={4}>
          {open && (
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                height: 64,
                width: 64,
                borderRadius: 1.5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Logo
            </Box>
          )}
          <IconButton
            onClick={handleDrawerOpen}
            sx={{
              height: 64,
              width: 64,
              borderRadius: 1.5,
              ...(open && { display: "none" }),
              zIndex: 1000,
            }}
          >
            <List size={32} />
          </IconButton>

          <Stack
            sx={{ position: "relative", ...(open && { right: "-5rem" }) }}
            direction="column"
            spacing={3}
          >
            {navButtons.map((el) =>
              el.index === selected ? (
                <Box
                  key={el.index}
                  p={1}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <Stack direction="row" alignItems="center">
                    <Link to={el.path as string}>
                      <IconButton
                        sx={{
                          width: "max-content",
                          color: "#ffffff",
                        }}
                        key={el.index}
                      >
                        <Stack direction="row" spacing={2}>
                          {el.icon}
                          {open && (
                            <Typography
                              variant="subtitle2"
                              sx={{ fontWeight: "300" }}
                            >
                              {el.name}
                            </Typography>
                          )}
                        </Stack>
                      </IconButton>
                    </Link>
                  </Stack>
                </Box>
              ) : (
                <>
                  {open && (
                    <Stack
                      width={"max-content"}
                      direction="row"
                      alignItems="center"
                    >
                      <Link to={el.path as string}>
                        <IconButton
                          onClick={() => setSelected(el.index)}
                          sx={{
                            width: "max-content",
                            color:
                              theme.palette.mode === "light"
                                ? "##000"
                                : theme.palette.text.primary,
                          }}
                          key={el.index}
                        >
                          <Stack direction="row" spacing={2}>
                            {el.icon}
                            {open && (
                              <Typography
                                variant="subtitle2"
                                sx={{ fontWeight: "300" }}
                              >
                                {el.name}
                              </Typography>
                            )}
                          </Stack>
                        </IconButton>
                      </Link>{" "}
                    </Stack>
                  )}

                  {!open && (
                    <Tooltip title={el.name} placement="right" key={el.index}>
                      <Link to={el.path as string}>
                        <IconButton
                          onClick={() => setSelected(el.index)}
                          sx={{
                            width: "max-content",
                            color:
                              theme.palette.mode === "light"
                                ? "##000"
                                : theme.palette.text.primary,
                          }}
                          key={el.index}
                        >
                          {el.icon}
                        </IconButton>
                      </Link>
                    </Tooltip>
                  )}
                </>
              )
            )}
            <Divider sx={{ width: "48px" }} />
            {selected === getSettings + 1 ? (
              <Box
                p={1}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                }}
              >
                <IconButton
                  sx={{
                    width: "max-content",
                    color: "#ffffff",
                  }}
                >
                  <Stack direction="row" spacing={2}>
                    <Gear size={25} />
                    {open && (
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: "300" }}
                      >
                        Settings
                      </Typography>
                    )}
                  </Stack>
                </IconButton>
              </Box>
            ) : (
              open && (
                <Tooltip title={"Settings"} placement="right">
                  <IconButton
                    onClick={() => setSelected(getSettings + 1)}
                    sx={{
                      width: "max-content",
                      color:
                        theme.palette.mode === "light"
                          ? "#000000"
                          : theme.palette.text.primary,
                    }}
                  >
                    <Stack direction="row" spacing={2}>
                      <Gear size={25} />
                      {open && (
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: "300" }}
                        >
                          Settings
                        </Typography>
                      )}
                    </Stack>
                  </IconButton>
                </Tooltip>
              )
            )}
          </Stack>
        </Stack>
        {/* <Stack alignItems="center" spacing={2}>
          <AntSwitch onChange={onToggleMode} defaultChecked />
          <Avatar
            src={faker.image.avatar()}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          />

          <Menu
            id="basic-menu"
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Stack spacing={1} p={1}>
              {profileMenu.map((el) => (
                <MenuItem onClick={handleClick}>
                  <Stack
                    sx={{ width: 100 }}
                    direction="row"
                    alignItems="center"
                    justifyContent={"space-between"}
                  >
                    <span>{el.title}</span>
                    {el.icon}
                  </Stack>
                </MenuItem>
              ))}
            </Stack>
          </Menu>
        </Stack> */}
      </Stack>
    </Box>
  );
}
