"use client";

import styled from "styled-components";

export const ListH = styled.ul`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
export const ListV = styled.ul`
  flex: 1;
  flex-direction: column;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  gap: 0px;
`;

export const ListItemH = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  flex: 1 0 33.33%;
  font-family: ${(props) => props.theme.fontFamily};
`;

export const ListItemV = styled.li`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-family: ${(props) => props.theme.fontFamily};
`;

export const CharacterInfo = styled.div`
  padding: 15px;
  overflow: hidden;
`;

export const CharacterTitle = styled.p`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
  font-family: ${(props) => props.theme.fontFamily};
  color: #303032;
`;

export const CharacterDetail = styled.div`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 18px;
  margin-bottom: 5px;
  color: #70592d;
`;

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 10px 20px;
  background-color: #9baaf2;
  box-shadow: 0px 2px 5px rgba(65, 35, 35, 0.1);
`;

export const NavLogo = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #24325fff;
  font-family: ${(props) => props.theme.fontFamily};
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const CardContainer = styled.div`
  flex: 1;
  height: 80vh;
  border-radius: 5px;
  overflow: hidden;
  max-width: 400px;
  background-color: #e89ac7;
  color: #303032;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 40%;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
