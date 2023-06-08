"use client";
import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";

export default function Layout({ children }) {
	const bgContent = useColorModeValue(
		"rgba(255, 255, 255, 0.1)",
		"rgba(10, 10, 10, 0.8)"
	);
	const fontColor = useColorModeValue(
		"whitealpha.800", // WhiteAlpha.800
		"whitealpha.100" // WhiteAlpha.100
	);
	return (
		<html lang="en">
			<body>
				<Providers>
					<Box
						position={"absolute"}
						h={"100vh"}
						w={"100vw"}
						paddingTop={"6rem"}
						paddingBottom={"4rem"}
					>
						<Navbar />
						<Container
							borderRadius={"xl"}
							maxW={"80%"}
							bgColor={bgContent}
							textColor={fontColor}
							padding={"1rem"}
						>
							{children}
						</Container>
					</Box>
				</Providers>
			</body>
		</html>
	);
}
