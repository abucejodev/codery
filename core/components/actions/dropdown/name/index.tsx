type Props = {
  value: string;
};

const Name = ({ value }: Props) => {
  return <span id="name">{value}</span>;
};

export default Name;
