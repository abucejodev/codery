type Props = {
  className?: string;
};

const Spinner = ({ className }: Props) => {
  return (
    <svg
      id="spinner"
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      className={`${className ? className : ""} animate-spin`}>
      <path
        d="M20.0001 12C20.0001 13.3811 19.6425 14.7386 18.9623 15.9405C18.282 17.1424 17.3022 18.1477 16.1182 18.8587C14.9341 19.5696 13.5862 19.9619 12.2056 19.9974C10.825 20.0328 9.45873 19.7103 8.23975 19.0612"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Spinner;
