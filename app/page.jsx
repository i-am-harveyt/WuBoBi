"use client";
import { UnorderedList, ListItem, Text } from "@chakra-ui/react";
import Title from "@/components/Title";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Main Page</title>
      </Head>
      <Title>說明</Title>
      <Text fontSize={"lg"}>
        歡迎來到我們的線上燒紙錢網站！
        <br />
        我們的網站旨在提供一種環保的方式讓人們能夠遵循傳統習俗，同時減少對環境的負面影響。我們深信，透過採用線上燒紙錢的方式，我們可以保留文化傳統的同時，減少森林砍伐和空氣污染。
        <br />
        為了環保，我們提倡線上燒紙錢的理念。傳統上，人們會在特定的節日或紀念日燒紙錢，以祭祀祖先或神明。然而，這種傳統做法常常導致大量的紙張浪費和空氣污染。透過我們的網站，您可以以虛擬形式燒紙錢，不僅減少了紙張的浪費，還能消除空氣污染的風險。
        <br />
        我們的網站特色如下：
      </Text>
      <UnorderedList>
        <ListItem>
          <Text fontSize={"lg"}>
            環保：網站提供虛擬燒紙錢的功能，無需實際使用紙張，節省資源並減少森林砍伐。
          </Text>
        </ListItem>
        <ListItem>
          <Text fontSize={"lg"}>
            安全：透過線上方式燒紙錢，消除了實際燃燒紙張所帶來的安全風險，同時避免了火災的可能性。
          </Text>
        </ListItem>
        <ListItem>
          <Text fontSize={"lg"}>
            方便：您可以隨時隨地使用我們的網站，無需親自到廟宇或特定場所進行燒紙錢的儀式，節省時間和精力。
          </Text>
        </ListItem>
        <ListItem>
          <Text fontSize={"lg"}>
            多樣性：我們提供了多種不同的經文，以滿足不同人群的需求和習俗。
          </Text>
        </ListItem>
        <ListItem>
          <Text fontSize={"lg"}>
            傳統文化傳承：線上燒紙錢的方式保留了傳統習俗的核心價值觀，同時與現代科技結合，將傳統文化傳承到更廣大的群眾中。
          </Text>
        </ListItem>
        <ListItem>
          <Text fontSize={"lg"}>
            網絡連結：我們提供了一個留言板，讓線上祭祖的人們可以留言互動，增加他們的參與感。這使得線上祭祖更具有交流和連結的特色。
          </Text>
        </ListItem>
      </UnorderedList>
      <Text fontSize={"lg"}>
        我們希望通過這個網站能夠促進環保和文化傳承的結合，讓更多人能夠遵循傳統習俗的同時，也關注保護我們的地球。
        <br />
        請加入我們的線上燒紙錢網站，一同為環境和文化傳統盡一份心力！
      </Text>
    </>
  );
}
