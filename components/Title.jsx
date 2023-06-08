import { Center, Text } from "@chakra-ui/react";

export default function Title({ children }) {
  return (
    <>
      <Center padding={"1rem"}>
        <Text fontSize={"2xl"}>{children}</Text>
      </Center>
    </>
  );
}
