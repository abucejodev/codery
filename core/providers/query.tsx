"use client";

import { SWRConfig, type SWRConfiguration } from "swr";

type Props = {
  children: React.ReactNode;
};

const Query = ({ children }: Props) => {
  const fetcher = async (key: string) => {
    const response = await fetch(key);
    const data = await response.json();
    return data;
  };

  const config: SWRConfiguration = {
    fetcher,
    suspense: true,
    revalidateOnFocus: false,
    revalidateIfStale: false,
    revalidateOnMount: true,
  };

  return <SWRConfig value={config}>{children}</SWRConfig>;
};

export default Query;
