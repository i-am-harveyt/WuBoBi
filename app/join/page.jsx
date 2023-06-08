"use client";
import Title from "@/components/Title";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";
import { login } from "../api/firebase";

export default function join() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const handleChangeCode = (e) => {
    setCode(e.target.value);
  };
  const handleClick = async () => {
    if (code.trim() === "") {
      setError("ID must not be empty!");
      return;
    }
    await login(code).then((existed) => {
      if (!existed) alert("Not existed");
      else {
        window.sessionStorage.setItem("forumId", code);
        alert("Join Succesfully");
        window.location.assign("/ceremony");
      }
    });
  };

  return (
    <>
      <Head>
        <title>Join Forum</title>
      </Head>
      <Title>Join forum via forum ID!</Title>
      <Box width={"100%"} justifyContent={"center"} textAlign={"center"}>
        <FormControl isInvalid={error}>
          <Input
            name="code"
            onChange={handleChangeCode}
            placeholder="Enter Your Forum ID!"
            variant={"filled"}
            size={"lg"}
            required
          />
          {error ? <FormErrorMessage>{error}</FormErrorMessage> : <></>}
        </FormControl>
        <Link href="/create_forum">
          <Text fontSize={"md"}>Want to create a forum?</Text>
        </Link>
        <Button variant={"outline"} marginX={"auto"} onClick={handleClick}>
          Join!
          <ArrowForwardIcon />
        </Button>
      </Box>
    </>
  );
}
