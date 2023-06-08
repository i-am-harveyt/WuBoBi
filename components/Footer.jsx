import { Center, Text, useColorModeValue } from "@chakra-ui/react";
export default function Footer() {
  const bgBody = useColorModeValue("white", "gray.800");
  return (
    <>
      <Center
        pos={"fixed"}
        left={0}
        bottom={0}
        w={"100%"}
        h={"3rem"}
        bgColor={bgBody}
      >
        <Text fontSize={"xs"}>Ⓒ HarveyTung, Yu Shin Liou 2023. All rights reserved</Text>
      </Center>
    </>
  );
}
