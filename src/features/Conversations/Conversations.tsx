import { Box, Stack } from "@mui/material";
import ConverseHeader from "./ConverseHeader";
import ConverseSendFooter from "./ConverseSendFooter";
import ConverseMessage from "./ConverseMessages/ConverseMessage";

export default function Conversations() {
  return (
    <>
      <Stack maxHeight="100vh" sx={{ overflowY: "hidden" }}>
        {/* Chat Header */}
        <ConverseHeader />

        {/* Message */}

        <Box
          width="100%"
          sx={{
            flexGrow: 1,
            height: "100%",

            overflowY: "scroll",
          }}
        >
          <ConverseMessage />
        </Box>

        {/* Chat Footer */}
        <ConverseSendFooter />
      </Stack>
    </>
  );
}
