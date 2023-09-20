import { useState } from "react";

import { useQuery } from "react-query";

import { type StringUrl } from "../config/types/generalTypes";

interface PaginationDataProps<T> {
  data: T;
  isLoading: boolean;
  getNextPage: () => void;
  getPreviousPage: () => void;
}

const usePagination = <T>(apiUrl: (endpointPage: string) => Promise<T>, queryKey: string, startingPageUrl: StringUrl): PaginationDataProps<T> => {
  const [pageUrl, setPageUrl] = useState<string>(startingPageUrl);
  const { data, isLoading } = useQuery([queryKey, pageUrl], async () => await apiUrl(pageUrl));

  const getNextPage = (): void => {
    const nextPage = data?.next;
    if (data?.next != null) setPageUrl(nextPage);
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
  };
};

export default usePagination;
