type Props = {
  name: string;
};

const Label = ({ name }: Props) => {
  return <h3>{name}</h3>;
};

export default Label;
