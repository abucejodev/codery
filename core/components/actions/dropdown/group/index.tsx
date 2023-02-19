type Props = {
  children: React.ReactNode;
  label?: string;
  className?: string;
};

const Group = ({ children, label, className }: Props) => {
  return (
    <div className={`${className ? className : ""} p-1`}>
      {label ? (
        <span className="block p-2 text-sm font-medium">{label}</span>
      ) : (
        <></>
      )}
      {children}
    </div>
  );
};

export default Group;
