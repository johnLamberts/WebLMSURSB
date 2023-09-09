import { Avatar } from "@mui/material";

export default function Cat({ name }: any) {
  return (
    <>
      <Avatar src="https://images.pexels.com/photos/17815428/pexels-photo-17815428/free-photo-of-portrait-of-a-brown-border-collie-standing-in-a-meadow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

      <h1>{name}</h1>
    </>
  );
}
