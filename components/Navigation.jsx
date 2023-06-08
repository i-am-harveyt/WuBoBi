import { Box, Button } from "@chakra-ui/react";
import Scriptures from "./Scriptures";

export default function Navigation() {
  const handleClick = () => {
    window.location.assign("/msg_board");
  };
  return (
    <Box w={"40vw"} display={"flex"} justifyContent={"space-around"}>
      <Button w={"50%"} variant={"outline"} onClick={handleClick}>
        留言板
      </Button>
      <Scriptures />
    </Box>
  );
}
