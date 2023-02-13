"use client";

import { SWRConfig, SWRConfiguration } from "swr";

type Props = {
  children: React.ReactNode;
};

const Query = ({ children }: Props) => {
  const fetcher = async (key: string) => {
    const response = await fetch(key);
    const data = await response.json();
    return data;
  };

  const configuration: SWRConfiguration = {
    fetcher,
    suspense: true,
    revalidateOnFocus: false,
    revalidateIfStale: false,
    revalidateOnMount: true,
  };

  return <SWRConfig value={configuration}>{children}</SWRConfig>;
};

export default Query;
