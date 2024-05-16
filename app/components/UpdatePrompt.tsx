"use client";

import { useGetCharacter } from "@/hooks";
import {
  CardContainer,
  CharacterDetail,
  CharacterInfo,
  CharacterTitle,
  DetailContainer,
  ListItemV,
  ListV,
  StyledDetailCharacterImage,
} from "@/styles";
import { useSearchParams } from "next/navigation";
import React from "react";

const UpdatePrompt: React.FC = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "";

  const [character] = useGetCharacter(id);

  return (
    <DetailContainer>
      <CardContainer>
        <StyledDetailCharacterImage
          className="animation"
          src={character.image}
        />
        <CharacterInfo>
          <CharacterTitle>{character.name}</CharacterTitle>
          <CharacterDetail>Estatus: {character.status}</CharacterDetail>
          <CharacterDetail>Especie: {character.species}</CharacterDetail>
          <CharacterDetail>Género: {character.gender}</CharacterDetail>
          <CharacterDetail>Origen: {character.origin?.name}</CharacterDetail>
          <CharacterDetail>
            Episodios:
            <ListV>
              {character.episode?.map((item) => (
                <ListItemV key={item}>{item}</ListItemV>
              ))}
            </ListV>
          </CharacterDetail>
        </CharacterInfo>
      </CardContainer>
    </DetailContainer>
  );
};

export default UpdatePrompt;
