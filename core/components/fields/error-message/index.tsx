import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

type Props = {
  message: React.ReactNode;
};

const ErrorMessage = ({ message }: Props) => {
  return (
    <div className="flex items-center gap-1">
      <ExclamationCircleIcon className="h-3 w-3 text-ruby/75" />
      <span className="text-ms text-ruby">{message}</span>
    </div>
  );
};

export default ErrorMessage;
