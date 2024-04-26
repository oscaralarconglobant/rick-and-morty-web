"use client";

import { FilterInput, NavbarContainer, NavLinks, NavLogo } from "@/styles";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useRef, useState } from "react";

export const Navbar: React.FC<{ hasSearch?: boolean }> = ({ hasSearch }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [nameFilter, setNameFilter] = useState<string>(
    searchParams.get("search") || ""
  );

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleFilterChange = useCallback((text: string) => {
    setNameFilter(text);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Clear any pending timeout
    }

    timeoutRef.current = setTimeout(() => {
      window.scrollTo({ top: 0 });
      router.push(pathname + "?" + createQueryString("search", text));
      timeoutRef.current = null; // Clear timeout reference after use
    }, 200);
  }, []);

  return (
    <NavbarContainer>
      <Link href={"/"}>
        <NavLogo>Rick And Morty Home</NavLogo>
      </Link>
      {hasSearch && (
        <NavLinks>
          <FilterInput
            name="name"
            value={nameFilter}
            onChange={(e) => handleFilterChange(e.target.value)}
            placeholder="Filtrar por nombre"
          />
        </NavLinks>
      )}
    </NavbarContainer>
  );
};
