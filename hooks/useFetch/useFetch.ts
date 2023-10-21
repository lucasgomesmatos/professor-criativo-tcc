import { useQuery } from "@tanstack/react-query";

export const useFetch = <T>(
  queryKey: string,
  fetchFunc: () => Promise<T>,
  filter?: string | null,
  page = 1,
  condition = true
) => {
  const search =
    filter !== null && filter !== undefined && filter?.length >= 1
      ? filter
      : "";

  return useQuery<T>({
    queryKey: [queryKey, search, page],
    queryFn: fetchFunc,
    keepPreviousData: true,
    retry: 0,
    enabled: condition,
  });
};
