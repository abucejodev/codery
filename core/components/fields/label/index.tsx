type Props = {
  name: string;
  id?: string;
};

const Label = ({ name, id }: Props) => {
  return <label id={id}>{name}</label>;
};

export default Label;
