import { useEffect, useState } from "react";
import useSettings from "../../../hooks/useSettings";
import { NAVBAR, defaultSettings } from "../../../config";
import {
  Backdrop,
  Divider,
  IconButton,
  Stack,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import ToggleButton from "./ToggleButton";
import { AnimatePresence, m } from "framer-motion";
import BackgroundStyles from "../../../utils/BackgroundStyles";
import Iconify from "../../Icons";
import SettingDirection from "./SettingsDirection";
import SettingsColorPreset from "./SettingsColorPresets";

const RootStyled = styled(m.div)(({ theme }) => ({
  ...BackgroundStyles(theme).bgBlur({
    color: theme.palette.background.paper,
    opacity: 0.92,
  }),
  top: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  position: "fixed",
  overflow: "hidden",
  width: NAVBAR.BASE_WDITH,
  flexDirection: "column",
  margin: theme.spacing(2),
  paddingBottom: theme.spacing(3),
  zIndex: theme.zIndex.drawer + 3,
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  boxShadow: `-24px 12px 32px -4px ${alpha(
    theme.palette.mode === "light"
      ? theme.palette.grey[500]
      : theme.palette.common.black,
    0.16
  )}`,
}));

export default function SettingsDrawer() {
  const {
    themeMode,
    themeLayout,
    themeStretch,
    themeContrast,
    themeDirection,
    themeColorPresets,
    onResetSetting,
  } = useSettings();

  const [open, setOpen] = useState(false);

  const notDefault =
    themeMode !== defaultSettings.themeMode ||
    themeLayout !== defaultSettings.themeLayout ||
    themeStretch !== defaultSettings.themeStretch ||
    themeContrast !== defaultSettings.themeContrast ||
    themeDirection !== defaultSettings.themeDirection ||
    themeColorPresets !== defaultSettings.themeColorPresets;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  function handleToggle() {
    setOpen((prev) => !prev);
  }

  function handleClose() {
    setOpen(false);
  }
  return (
    <>
      <Backdrop
        open={open}
        onClick={handleClose}
        sx={{
          backgroundColor: "transparent",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      />

      {!open && (
        <ToggleButton
          open={open}
          notDefault={notDefault}
          onToggle={handleToggle}
        />
      )}

      <AnimatePresence>
        {open && (
          <>
            <RootStyled>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ py: 2, pr: 1, pl: 2.5 }}
              >
                <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
                  Settings
                </Typography>

                <IconButton onClick={onResetSetting}>
                  <Iconify icon={"ic:round-refresh"} width={20} height={20} />
                </IconButton>

                <IconButton onClick={handleClose}>
                  <Iconify icon={"eva:close-fill"} width={20} height={20} />
                </IconButton>
              </Stack>

              <Divider sx={{ borderStyle: "dashed" }} />

              {/* <Scrollbar sx={{ flexGrow: 1 }}> */}
              <Stack spacing={3} sx={{ p: 3 }}>
                <Stack spacing={1.5}>
                  <Typography variant="subtitle2">Direction</Typography>
                  <SettingDirection />
                </Stack>

                <Stack spacing={1.5}>
                  <Typography variant="subtitle2">Presets</Typography>
                  <SettingsColorPreset />
                </Stack>
              </Stack>
              {/* </Scrollbar> */}
            </RootStyled>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
