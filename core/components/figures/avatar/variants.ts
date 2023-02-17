import { cva, type VariantProps } from "class-variance-authority";

const variants = cva(
  [
    "relative flex-none rounded-full border-2 border-obsidian/20 overflow-hidden",
    "dark:border-quartz/20",
  ],
  {
    variants: {
      size: {
        small: ["h-8 w-8"],
        medium: ["h-12 w-12"],
        large: ["h-24 w-24"],
      },
      status: {
        online: [],
        away: [],
        offline: [],
      },
    },
    compoundVariants: [],
    defaultVariants: {
      size: "small",
      status: "online",
    },
  }
);

export default variants;

export type Variants = VariantProps<typeof variants>;
