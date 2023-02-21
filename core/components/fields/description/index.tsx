type Props = {
  paragraph: string;
};

const Description = ({ paragraph }: Props) => {
  return <p className="text-xs  text-obsidian/50">{paragraph}</p>;
};

export default Description;
