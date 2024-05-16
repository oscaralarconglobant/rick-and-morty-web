"use client";

import { Container, ListH, LoadMoreButton } from "@/styles";
import { useSearchParams } from "next/navigation";
import {
  ReactElement,
  Suspense,
  useCallback,
  useEffect,
  useState,
} from "react";

interface IProps<T> {
  getData: (page: number, nameFilter?: string) => Promise<T[]>;
  component: (item: T) => ReactElement;
}

/**
 * Generic List component using Suspense
 * @param {IProps}
 * @returns
 */
export const InfiniteList = <T,>({ getData, component }: IProps<T>) => {
  const searchParams = useSearchParams();
  const name = searchParams.get("search") || "";

  const [items, setItems] = useState<T[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async (pageNumber: number, items: T[]) => {
    setLoading(true);
    try {
      const newItems = (await getData(pageNumber, name)) as T[];
      setItems([...items, ...newItems]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setPage(1);
    fetchData(page, []);
  }, [name]);

  useEffect(() => {
    fetchData(page, items);
  }, [page]);

  const handleLoadMore = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  const renderList = () => {
    return items.map(component);
  };

  return (
    <Container>
      <Suspense fallback={<p>Loading...</p>}>
        <ListH>{renderList()}</ListH>
      </Suspense>
      {!loading && items.length > 0 && (
        <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
      )}
    </Container>
  );
};
