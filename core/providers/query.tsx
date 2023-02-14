"use client";

import { SWRConfig, type SWRConfiguration } from "swr";
import axios from "axios";

type Props = {
  children: React.ReactNode;
};

const Query = ({ children }: Props) => {
  const fetcher = (key: string) => {
    const data = axios.get(key).then((response) => response.data);
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
