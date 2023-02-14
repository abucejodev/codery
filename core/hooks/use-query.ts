import useSWR, { type SWRConfiguration } from "swr";

type Payload = {
  key: string;
  config?: SWRConfiguration;
};

const useQuery = <Data>({ key, config }: Payload) => {
  const response = useSWR<Data>(key, config);
  return response;
};

export default useQuery;
