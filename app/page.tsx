"use client";

import { Suspense } from "react";
import { CharacterItem, InfiniteList, Navbar } from "./components";
import { useGetCharacters } from "./hooks";
import { ICharacter } from "./interfaces";
import { PageContainer } from "./styles";

export default function Home() {
  const [getCharacters] = useGetCharacters();

  return (
    <PageContainer>
      <Suspense>
        <Navbar hasSearch />
        <InfiniteList<ICharacter>
          getData={getCharacters}
          component={(item) => <CharacterItem key={item.id} item={item} />}
        />
      </Suspense>
    </PageContainer>
  );
}
