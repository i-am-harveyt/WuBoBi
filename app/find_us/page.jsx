"use client";
import Title from "@/components/Title";
import { Link, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import Head from "next/head";

export default function find_us() {
  return (
    <>
      <Head>
        <title>Find Us!</title>
      </Head>
      <Title>Find Us!</Title>
      <Text fontSize={"lg"}>
        如果有緣，你可能會在任何一個地方遇見我們，雖然你可能不會知道。
        <br />
        但如果有心想找我們：
      </Text>
      <UnorderedList>
        <ListItem>
          <Text fontSize={"lg"}>利用電郵也許是個不錯的策略</Text>
          <UnorderedList>
            <ListItem>
              童晧庭:{" "}
              <Link href="mailto:haoting.tung@gmail.com">
                haoting.tung@gmail.com
              </Link>
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>
          <Text fontSize={"lg"}>Github:</Text>
          <UnorderedList>
            <ListItem>
              童晧庭:{" "}
              <Link href="https://github.com/i-am-harveyt/" isExternal={true}>
                i-am-harveyt
              </Link>
            </ListItem>
          </UnorderedList>
        </ListItem>
      </UnorderedList>
    </>
  );
}
