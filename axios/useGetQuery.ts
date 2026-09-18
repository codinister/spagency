'use client'

import { useQuery } from '@tanstack/react-query';
import fetch from './fetch';

const useGetQuery = (key: string, url: string) => {
  
  const fn = () => {
    return fetch({ url }); 
  };

  const result = useQuery({
    queryKey: [key],
    queryFn: fn,
  });

  const {data,isPending, isError} = result
  return isError ? 'An error occured' : isPending ? [] : data?.data
};

export default useGetQuery;
