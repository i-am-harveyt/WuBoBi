"use client";
import Flame from "@/components/Flame";
import Navigation from "@/components/Navigation";
import Title from "@/components/Title";
import { Box } from "@chakra-ui/react";
import Head from "next/head";

function ceremony() {
  return (
    <>
      <Head>
        <title>Ceremony</title>
      </Head>
      <Title>Ceremony</Title>
      <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
        <Flame />
        <Navigation />
      </Box>
    </>
  );
}

export default ceremony;
