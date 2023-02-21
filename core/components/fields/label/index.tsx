type Props = {
  name: string;
  id?: string;
};

const Label = ({ name, id }: Props) => {
  return (
    <label id={id} className="text-sm font-semibold text-obsidian">
      {name}
    </label>
  );
};

export default Label;