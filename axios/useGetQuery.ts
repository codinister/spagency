import { useQuery } from 'react-query';
import { request } from './axios.config';

const useGetQuery = (querykey: [] | string, url: string, staleTime = 0) => {
  const fetcherFunction = () => request({ url });

  return useQuery(querykey, fetcherFunction, {
    staleTime,
    cacheTime: 0
  });
};

export default useGetQuery;
