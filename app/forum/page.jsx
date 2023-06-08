"use client";
import ItemBox from "@/components/ItemBox";
import Title from "@/components/Title";
import { Box, Button, Input, Stack } from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";

export default function Forum() {
  let forumName = "Foo";
  let [content, setContent] = useState("");
  let handleChange = (e) => {
    setContent(e.target.value);
  };

  let arr = [
    { user: "User", date: "2023/01/07", content: "Heyyyyyyy" },
    { user: "User", date: "2023/01/06", content: "Heyyyyyy" },
    { user: "User", date: "2023/01/05", content: "Heyyyyy" },
    { user: "User", date: "2023/01/04", content: "Heyyyy" },
    { user: "User", date: "2023/01/03", content: "Heyyy" },
    { user: "User", date: "2023/01/02", content: "Heyy" },
    { user: "User", date: "2023/01/01", content: "Hey" },
  ];

  return (
    <>
      <Head>
        <title>{forumName}</title>
      </Head>
      <Title>{forumName}</Title>
      <Stack spacing={"1rem"}>
        <form method="post">
          <Box border={"1px"} borderRadius={"xl"} display={"flex"}>
            <Input
              name="content"
              onChange={handleChange}
              variant={"filled"}
              placeholder="Say Something"
            />
            <Button type="submit" padding={"1rem"}>
              Submit!
            </Button>
          </Box>
        </form>
        {arr.map(({ user, date, content }) => (
          <ItemBox user={user} date={date} content={content} />
        ))}
      </Stack>
    </>
  );
}
