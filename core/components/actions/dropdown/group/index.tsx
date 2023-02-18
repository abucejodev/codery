type Props = {
  children: React.ReactNode;
  name?: string;
  className?: string;
};

const Group = ({ children, name, className }: Props) => {
  return (
    <div className={`${className ? className : ""} p-1`}>
      {name ? (
        <span className="block p-2 text-sm font-medium">{name}</span>
      ) : (
        <></>
      )}
      {children}
    </div>
  );
};

export default Group;
