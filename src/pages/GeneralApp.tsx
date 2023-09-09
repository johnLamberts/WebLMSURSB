import Chats from "../features/Chats/Chats";
import { Box, Stack, Theme } from "@mui/material";
import Conversations from "../features/Conversations/Conversations";
import { useTheme } from "@emotion/react";
import Contact from "../components/Contact";

export default function GeneralApp() {
  const theme = useTheme() as Theme;
  return (
    // <Stack direction="row" sx={{ width: "100%", overflow: "hidden" }}>
    //   {/* Chats */}
    //   <Chats />

    //   <Box
    //     sx={{
    //       width: "calc(100vw  - 720px)",
    //       backgroundColor:
    //         theme.palette.mode === "light"
    //           ? "#fff"
    //           : theme.palette.background.paper,
    //     }}
    //   >
    //     {/* Conversation */}
    //     <Conversations />
    //   </Box>

    //   {/* Contact */}
    //   <Contact />
    // </Stack>
    <></>
  );
}
