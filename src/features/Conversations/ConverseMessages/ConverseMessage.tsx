import { Box, Stack } from "@mui/material";
import TextMessage from "./MessageType";
import { faker } from "@faker-js/faker";
const chatHistory = [
  {
    type: "msg",
    message: "Hi 👋🏻, How are ya ?",
    incoming: true,
    outgoing: false,
  },
  {
    type: "divider",
    text: "Today",
  },
  {
    type: "msg",
    message: "Hi 👋 Panda, not bad, u ?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Can you send me an abstarct image?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Ya sure, sending you a pic",
    incoming: true,
    outgoing: false,
  },

  {
    type: "msg",
    subtype: "img",
    message: "Here You Go",
    img: faker.image.abstract(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    message: "Can you please send this in file format?",
    incoming: false,
    outgoing: true,
  },

  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "reply",
    reply: "This is a reply",
    message: "Yep, I can also do that",
    incoming: false,
    outgoing: true,
  },
];
export default function ConverseMessage() {
  return (
    <Box p={1}>
      <Stack spacing={3}>
        {chatHistory.map<any>((el) => {
          switch (el.type) {
            case "divider":
              return <TextMessage.TimeLine el={el} key={el.type} />;
            case "msg":
              switch (el.subtype) {
                case "img":
                  return <TextMessage.MediaMessage el={el} key={el.type} />;

                case "doc":
                  return <TextMessage.DocumentMessage el={el} key={el.type} />;
                case "link":
                  return <TextMessage.LinkMessage el={el} key={el.type} />;
                case "reply":
                  return <TextMessage.ReplyMessage el={el} key={el.type} />;

                default:
                  return <TextMessage el={el} />;
              }
            default:
              break;
          }
        })}
      </Stack>
    </Box>
  );
}
