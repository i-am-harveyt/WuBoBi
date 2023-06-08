import { Box, Text } from "@chakra-ui/react";

export default function ItemBox({ user, date, content }) {
	return (
		<>
			<Box border={"1px"} padding={"1rem"}>
				<Text fontSize={"md"}>{user}</Text>
				<Text fontSize={"md"}>{content}</Text>
				<Text fontSize={"xs"}>{date}</Text>
			</Box>
		</>
	);
}
