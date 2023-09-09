import {
  Box,
  Theme,
  useTheme,
  Stack,
  TextField,
  styled,
  InputAdornment,
  IconButton,
  Fab,
  Tooltip,
} from "@mui/material";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import {
  Camera,
  File,
  Image,
  LinkSimple,
  PaperPlaneTilt,
  Smiley,
  Sticker,
  User,
} from "phosphor-react";
import { useState } from "react";

const AttachmentOptions = [
  {
    color: "#4dc5fe",
    icon: <Image size={24} />,
    y: 102,
    title: "Photo/Video",
  },
  {
    color: "#1b8cfe",
    icon: <Sticker size={24} />,
    y: 172,
    title: "Sticker",
  },
  {
    color: "#4dc5fe",
    icon: <Camera size={24} />,
    y: 242,
    title: "Image",
  },
  {
    color: "#159b2",
    icon: <File size={24} />,
    y: 312,
    title: "Documents",
  },
  {
    color: "#014f7f",
    icon: <User size={24} />,
    y: 382,
    title: "Contact",
  },
];

const StyledInput = styled(TextField)(() => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px",
    paddingBottom: "12px",
  },
}));

function ChartInput({ setOpenPicker }: any) {
  const [openOptions, setOpenOptions] = useState(false);
  return (
    <StyledInput
      fullWidth
      placeholder="Write a message..."
      variant="filled"
      InputProps={{
        startAdornment: (
          <Stack sx={{ width: "max-content" }}>
            <Stack
              sx={{
                position: "relative",

                display: openOptions ? "inline-block" : "none",
              }}
            >
              {AttachmentOptions.map((el) => (
                <Tooltip title={el.title} placement="right">
                  <Fab
                    sx={{
                      position: "absolute",
                      top: -el.y,
                      backgroundColor: el.color,
                    }}
                  >
                    {el.icon}
                  </Fab>
                </Tooltip>
              ))}
            </Stack>

            <InputAdornment position="end">
              <IconButton onClick={() => setOpenOptions((opt) => !opt)}>
                <LinkSimple />
              </IconButton>
            </InputAdornment>
          </Stack>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => setOpenPicker((picker: any) => !picker)}>
              <Smiley />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default function ConverseSendFooter() {
  const theme = useTheme() as Theme;

  const [openPicker, setOpenPicker] = useState(false);

  return (
    <Box
      p={2}
      sx={{
        width: "100%",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.default,

        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        <Stack sx={{ width: "100%" }}>
          <Box
            sx={{
              display: openPicker ? "inline" : "none",
              zIndex: 10,
              position: "fixed",
              bottom: 81,
              right: 100,
            }}
          >
            <Picker
              theme={theme.palette.mode}
              data={data}
              onEmojiSelect={console.log}
            />
          </Box>
          <ChartInput setOpenPicker={setOpenPicker} />
        </Stack>

        <Box
          sx={{
            height: 48,
            width: 48,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 1.5,
          }}
        >
          <Stack
            sx={{ height: "100%", width: "100%" }}
            alignItems="center"
            justifyContent={"center"}
          >
            <IconButton>
              <PaperPlaneTilt color="#fff" />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
