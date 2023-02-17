type Props = {
  value: string;
};

const Name = ({ value }: Props) => {
  return (
    <span id="name" className="whitespace-nowrap leading-4">
      {value}
    </span>
  );
};

export default Name;
