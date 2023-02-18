import { cva, type VariantProps } from "class-variance-authority";

const variants = cva(
  [
    "relative flex-none border-2 border-obsidian/20 overflow-hidden",
    "dark:border-quartz/20",
  ],
  {
    variants: {
      size: {
        small: ["h-8 w-8"],
        medium: ["h-12 w-12"],
        large: ["h-20 w-20"],
      },
      status: {
        online: [],
        away: [],
        offline: [],
      },
      shape: {
        circle: ["rounded-full"],
        square: ["rounded"],
      },
    },
    compoundVariants: [],
    defaultVariants: {
      size: "small",
      status: "online",
      shape: "circle",
    },
  }
);

export default variants;

export type Variants = VariantProps<typeof variants>;
