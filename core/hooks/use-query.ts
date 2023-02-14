import useSWR, { type SWRResponse, type SWRConfiguration } from "swr";

type Payload<Data> = {
  key: string;
  config: SWRConfiguration<Data>;
};

const useQuery = <Data>({ key, config }: Payload<Data>): SWRResponse<Data> => {
  const response = useSWR<Data>(key, config);
  return response;
};

export default useQuery;
