import React, { useEffect, useState } from "react";
import {
	Box,
	FormControl,
	FormLabel,
	Input,
	Button,
	Textarea,
} from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { GETPost, POSTPost } from "@/app/api/firebase";

function MessageBoard() {
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState({ 1: 1 });

	const [fetched, setFetched] = useState(false);
	useEffect(() => {
		const id = window.sessionStorage.getItem("forumId");
		const data = async () => {
			await GETPost(id).then((e) =>
				setMessages(Object.values(e).sort((a, b) => b.time - a.time))
			);
		};
		if (!fetched) {
			setFetched(true);
			data();
		}
	}, [fetched]);

	const handleNameChange = (e) => setName(e.target.value);
	const handleMessageChange = (e) => setMessage(e.target.value);
	const handleSubmit = async (e) => {
		e.preventDefault();
		// Create a new message object
		const newMessage = {
			id: uuidv4(),
			name,
			message,
		};

		// Save the message to the database (Firefox database API)
		// Replace with your own implementation
		await POSTPost(
			window.sessionStorage.getItem("forumId"),
			newMessage.id,
			newMessage.name,
			newMessage.message
		);

		// Clear the input fields
		setName("");
		setMessage("");

		// fetch data again
		setFetched(false);
	};

	const renderMassages = () => {
		return messages.length > 0 ? (
			<Box>
				{messages.map((message) => (
					<Box key={message.id} p={4} borderWidth={1} borderRadius="md" my={4}>
						<strong>{message.name}</strong>
						<br />
						<span>{message.message}</span>
					</Box>
				))}
			</Box>
		) : (
			<Box p={4} borderWidth={1} borderRadius="md" my={4}>
				Make your wish!.
			</Box>
		);
	};

	return (
		<Box p="4" borderWidth={1} borderRadius="md" my={4} width={"100%"}>
			<form onSubmit={handleSubmit}>
				<FormControl>
					<FormLabel>Name</FormLabel>
					<Input
						type="text"
						value={name}
						onChange={handleNameChange}
						placeholder="Your name"
						required
					/>
				</FormControl>

				<FormControl mt={4}>
					<FormLabel>Message</FormLabel>
					<Textarea
						value={message}
						onChange={handleMessageChange}
						placeholder="Enter your message"
						required
					/>
				</FormControl>

				<Button type="submit" variant={"outline"} colorScheme="teal" mt={4}>
					Submit
				</Button>
			</form>

			{renderMassages()}
		</Box>
	);
}

export default MessageBoard;
