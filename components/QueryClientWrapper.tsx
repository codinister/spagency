'use client'


import { QueryClient, QueryClientProvider } from 'react-query';

type QueryClientType = {
  children: React.ReactNode;
};

const QueryClientWrapper = ({ children }: QueryClientType) => {

  const provider = new QueryClient();

  return (
    <QueryClientProvider client={provider}>
    {children}
    </QueryClientProvider>
  );
};

export default QueryClientWrapper;
