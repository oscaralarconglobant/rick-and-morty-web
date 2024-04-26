"use client";

import Link from "next/link";
import styled from "styled-components";

import background from "@/assets/images/rick-and-morty-orange-space.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90vh;
`;

export const LoadMoreButton = styled.button`
  background-color: #a9f3fd;
  padding: 10px;
  color: #303032;
  font-family: ${(props) => props.theme.fontFamily};
  cursor: pointer;
`;

export const CharacterImage = styled.img`
  width: 200px;
  height: 200px;
  text-align: center;
`;

export const PageContainer = styled.div`
  flex: 1;
  background-color: #02afc5;
  color: #a9f3fd;
  background-image: url(${background.src});
`;

export const FilterInput = styled.input`
  margin: 10px;
  padding: 10px;
  border-width: 1px;
  background-color: #a9f3fd;
  color: #303032;
  font-family: ${(props) => props.theme.fontFamily};
  border-color: #a9f3fd;
`;

export const StyledCharacterItem = styled(Link)`
  flex: 1;
  border-radius: 13px;
  background-color: #24325fff;
  border-color: #24325fff;
  text-align: center;
  padding: 5px;
  cursor: pointer;
`;

export const StyledCharacterImage = styled.img`
  flex: 1;
  border-radius: 50%;
  aspect-ratio: 1/1;
`;

export const DetailContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 20px;
  height: 100vh;
  color: #303032;
`;

export const StyledDetailCharacterImage = styled.img`
  flex: 1;
  width: 100%;
  aspect-ratio: 1/1;
`;

export const StyledCharacterContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;
  padding-top: 5px;
  line-height: 16px;
  border-radius: 16px;
  background-color: #24325fff;
`;

export const StyledCharacterName = styled.p`
  font-family: ${(props) => props.theme.fontFamily};
`;
