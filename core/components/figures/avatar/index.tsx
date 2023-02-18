import purge from "@/core/libraries/purge";
import Image from "next/image";
import variants, { type Variants } from "./variants";

type Props = Variants & {
  alt: string;
  src: string;
};

const Avatar = ({ alt, src, ...props }: Props) => {
  return (
    <div className={purge(variants(props))}>
      <Image alt={alt} src={src} fill className="object-cover" />
    </div>
  );
};

export default Avatar;
