import { useState, useEffect } from "react";

import { useQuery } from "react-query";

interface InitialDataProps<T> {
  data: T | null | undefined;
  isLoading: boolean;
}

const useGetInitialData = <T>(id: string, apiUrl: (id: number | null) => Promise<T | undefined>, queryKey: string, initialDataFromState: T | undefined): InitialDataProps<T> => {
  const [initialData, setInitialData] = useState<null | T>(null);
  const [hasIntialData, setHasInitialData] = useState(true);

  const { data, isLoading } = useQuery([queryKey, hasIntialData], async () => await apiUrl(+id), {
    enabled: !hasIntialData,
  });

  useEffect(() => {
    if (initialDataFromState !== undefined) {
      setInitialData(initialDataFromState);
      return;
    }
    setHasInitialData(false);
  }, [initialDataFromState]);

  return {
    data: initialData ?? data,
    isLoading,
  };
};

export default useGetInitialData;
