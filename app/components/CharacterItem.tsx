import { ICharacter } from "@/interfaces";
import {
  StyledCharacterContent,
  StyledCharacterImage,
  StyledCharacterItem,
  StyledCharacterName,
} from "@/styles";

export const CharacterItem = ({ item }: { item: ICharacter }) => {
  return (
    <StyledCharacterItem
      href={{
        pathname: `/details`,
        query: {
          id: item.id,
          name: item.name,
        },
      }}
    >
      <StyledCharacterImage src={item.image} />

      <StyledCharacterContent>
        <StyledCharacterName>{item.name}</StyledCharacterName>
        <StyledCharacterName>More Info...</StyledCharacterName>
      </StyledCharacterContent>
    </StyledCharacterItem>
  );
};
