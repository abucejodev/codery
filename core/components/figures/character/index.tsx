import Avatar from "../avatar";

type Props = {
  name: string;
  title: string;
  avatar?: string;
};

const Character = ({ name, title, avatar }: Props) => {
  return (
    <div className="flex gap-2">
      {avatar ? <Avatar alt="Me" src={avatar} /> : <></>}
      <div className="flex flex-col">
        <span className="font-medium">{name}</span>
        <span className="text-xs font-normal opacity-80">{title}</span>
      </div>
    </div>
  );
};

export default Character;
