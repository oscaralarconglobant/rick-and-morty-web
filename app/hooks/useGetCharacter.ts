import { API_URL } from "@/const";
import { ICharacter } from "@/interfaces";
import { useState, useEffect } from "react";

export const useGetCharacter = (
  id: string | number = 1
): [ICharacter, boolean] => {
  const [character, setCharacter] = useState<ICharacter>({} as ICharacter);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchGetCharacters() {
      const response = await fetch(`${API_URL}/${id}`);
      const characterResponse: ICharacter = await response.json();

      setCharacter(characterResponse);
      setIsLoading(false);
    }
    fetchGetCharacters();
  }, [id]);

  return [character, isLoading];
};
