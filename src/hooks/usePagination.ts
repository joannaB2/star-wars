import { useState } from "react";

import { useQuery } from "react-query";

import { type StringUrl } from "../config/types/generalTypes";

interface PaginationDataProps<T> {
  data: T | undefined;
  isLoading: boolean;
  getNextPage: () => void;
  getPreviousPage: () => void;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

interface PaginationResponse {
  next: StringUrl | null;
  previous: StringUrl | null;
}

const usePagination = <T extends PaginationResponse>(apiUrl: (endpointPage: string) => Promise<T>, queryKey: string, startingPageUrl: StringUrl): PaginationDataProps<T> => {
  const [pageUrl, setPageUrl] = useState<string>(startingPageUrl);
  const { data, isLoading } = useQuery([queryKey, pageUrl], async () => await apiUrl(pageUrl));

  const getNextPage = (): void => {
    const nextPage = data?.next;
    if (nextPage != null) setPageUrl(nextPage);
  };

  const getPreviousPage = (): void => {
    const previousPage = data?.previous;
    if (previousPage != null) setPageUrl(previousPage);
  };

  return {
    data,
    isLoading,
    getNextPage,
    getPreviousPage,
    hasNextPage: data?.next !== null,
    hasPrevPage: data?.previous !== null,
  };
};

export default usePagination;
