import { useState } from 'react';

export function usePagination(): [
  number,
  number,
  (page: number, perPage: number) => void
] {
  const [{ page, perPage }, setPaginationState] = useState({
    page: 1,
    perPage: 10,
  });
  const setPagination = (page: number, perPage: number) =>
    setPaginationState({ page, perPage });

  return [page, perPage, setPagination];
}
