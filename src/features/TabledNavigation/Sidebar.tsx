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
    icon: <Graph />,
  },
  {
    index: 1,
    name: "Students Management",
    icon: <Users />,
  },
  {
    index: 2,
    name: "Books Management",
    icon: <Books />,
  },
  {
    index: 3,
    name: "Documents Management",
    icon: <FileDoc />,
  },

  {
    index: 4,
    name: "Archive",
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
  // const { onToggleMode } = useSettings();
  const [selected, setSelected] = useState<number>(0);

  // const [anchorEl, setAnchorEl] = useState(null);
  // const open = Boolean(anchorEl);

  // function handleClick(event: any) {
  //   setAnchorEl(event.currentTarget);
  // }

  // function handleClose() {
  //   setAnchorEl(null);
  // }

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
                    </Stack>
                  )}

                  {!open && (
                    <Tooltip title={el.name} placement="right" key={el.index}>
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
                  <Gear size={25} />
                </IconButton>
              </Box>
            ) : (
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
                  <Gear size={25} />
                </IconButton>
              </Tooltip>
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
