"use client";
import MessageBoard from "@/components/MessageBoard";
import Title from "@/components/Title";
import Head from "next/head";

function message_board() {
  return (
    <>
      <Head>
        <title>Message Board</title>
      </Head>
      <Title>Message Board</Title>
      <MessageBoard />
    </>
  );
}

export default message_board;
