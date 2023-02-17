type Props = {
  children: React.ReactNode;
  className?: string;
};

const Group = ({ children, className }: Props) => {
  return <div className={`${className ? className : ""} p-1`}> {children}</div>;
};

export default Group;
