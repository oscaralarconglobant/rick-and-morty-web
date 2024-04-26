import { API_URL } from "@/const";
import { ICharacter, IResponse } from "@/interfaces";
import { useCallback } from "react";

export const useGetCharacters = () => {
  const getCharacter = useCallback(async (page: number = 1, name?: string) => {
    const nameFilter = name ? `&name=${name}` : "";
    const response = await fetch(`${API_URL}?page${page}${nameFilter}`);
    const data = (await response.json()) as IResponse<ICharacter[]>;
    return data.results;
  }, []);

  return [getCharacter];
};
