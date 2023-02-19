type Props = {
  message: React.ReactNode;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const ErrorMessage = ({ message, Icon }: Props) => {
  return (
    <div className="mt-1 flex items-center gap-1 max-w-sm">
      {Icon ? <Icon className="h-3 w-3 stroke-2 text-ruby" /> : <></>}
      <p className="text-left text-xs font-semibold text-ruby">{message}</p>
    </div>
  );
};

export default ErrorMessage