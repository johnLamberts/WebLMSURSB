import Sidebar from "../features/TabledNavigation/Sidebar";
// import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { Box, CSSObject, Stack, Theme, styled } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { useState } from "react";
import Header from "../features/TabledNavigation/Header";
import { Outlet } from "react-router-dom";
const drawerWidth = 280;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(11)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function AdminLayout() {
  // const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex", overflowX: "hidden", maxHeight: "100vh" }}>
      <Stack direction="row">
        <Drawer variant="permanent" open={open}>
          <Sidebar
            handleDrawerOpen={handleDrawerOpen}
            open={open}
            handleDrawerClose={handleDrawerClose}
          />
        </Drawer>
      </Stack>
      <Box component="main" sx={{ flexGrow: 1, p: 2, overflowY: "hidden" }}>
        <Header />
        <DrawerHeader />
        <Box sx={{ width: "100%" }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
