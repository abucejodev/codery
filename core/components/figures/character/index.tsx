import Avatar from "../avatar";

type Props = {
  name: string;
  about: string;
  avatar?: string;
};

const Character = ({ name, about, avatar }: Props) => {
  return (
    <div className="flex gap-2">
      {avatar ? <Avatar alt="Me" src={avatar} /> : <></>}
      <div className="flex flex-col">
        <span className="font-medium leading-4">{name}</span>
        <span className="text-xs font-normal leading-4 opacity-80">
          {about}
        </span>
      </div>
    </div>
  );
};

export default Character;
