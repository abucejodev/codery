import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

type Props = {
  message: React.ReactNode;
};

const ErrorMessage = ({ message }: Props) => {
  return (
    <div className="mt-1 flex max-w-sm items-center gap-1">
      <ExclamationCircleIcon className="h-3 w-3 stroke-2 text-ruby" />
      <p className="text-left text-xs font-semibold text-ruby">{message}</p>
    </div>
  );
};

export default ErrorMessage;
