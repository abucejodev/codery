import Query from "./query";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return <Query>{children}</Query>;
};

export default Providers;
