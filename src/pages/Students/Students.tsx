import {
  Backdrop,
  Box,
  Button,
  CSSObject,
  Stack,
  Theme,
  Typography,
  styled,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";

import TitleHeader from "../../components/TitleHeader";
import { Plus } from "phosphor-react";
import StudentTabled from "../../features/Students/StudentTabled";
import { useState } from "react";
import StudentForms from "../../features/Students/StudentForms";

const drawerWidth = 550;
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
    width: `calc(${theme.spacing(0)} + 1px)`,
  },
});

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

export default function Students() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box width={"100%"}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <TitleHeader title="Students" subtitle="List of Students" />
        <Button variant="outlined" onClick={handleDrawerOpen}>
          <Stack spacing={1} direction="row" alignItems={"center"}>
            <Plus size={32} />
            <Typography variant="subtitle2">Add Student</Typography>
          </Stack>
        </Button>
      </Stack>

      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={open}
      >
        <Drawer anchor="right" variant="permanent" open={open}>
          <StudentForms handleDrawerClose={handleDrawerClose} />
        </Drawer>
      </Backdrop>

      <StudentTabled />
    </Box>
  );
}
