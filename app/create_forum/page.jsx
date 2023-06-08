"use client";
import Title from "@/components/Title";
import {
  Center,
  Input,
  Button,
  Stack,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import { POSTForum } from "../api/firebase";

export default function create_forum() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  let handleChangeCode = (e) => {
    setId(e.target.value);
  };
  let handleChangeName = (e) => {
    setName(e.target.value);
  };

  const [nameError, setNameError] = useState("");
  const [idError, setIDError] = useState("");

  const handleClick = () => {
    let nameTmp = name.trim();
    if (nameTmp === "") setNameError("Name must not be emtpy");

    let idTmp = id.trim();
    if (idTmp === "") setIDError("ID must not be empty");

    if (nameTmp === "" || idTmp === "") return;

    POSTForum(id, name).then((existed) => {
      if (existed) alert("ID existed");
      else alert("Succeed");
      window.location.assign("/join");
    });
  };

  return (
    <>
      <Title>Create a Forum!</Title>
      <Center textAlign={"center"}>
        <Stack spacing={"0.5rem"}>
          <FormControl isInvalid={idError}>
            <Input
              name="id"
              onChange={handleChangeCode}
              placeholder="Enter Your Forum ID!"
              variant={"filled"}
              size={"lg"}
              width={"20rem"}
            />
            {idError ? <FormErrorMessage>{idError}</FormErrorMessage> : <></>}
          </FormControl>
          <FormControl isInvalid={nameError}>
            <Input
              name="name"
              onChange={handleChangeName}
              placeholder="Enter Your name!"
              variant={"filled"}
              size={"lg"}
              width={"20rem"}
            />
            {nameError ? (
              <FormErrorMessage>{nameError}</FormErrorMessage>
            ) : (
              <></>
            )}
          </FormControl>
          <Button variant={"outline"} onClick={handleClick} margin={"auto"}>
            Submit
          </Button>
        </Stack>
      </Center>
    </>
  );
}
