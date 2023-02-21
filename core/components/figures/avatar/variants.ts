import { cva, type VariantProps } from "class-variance-authority";

const variants = cva(
  [
    "relative flex-none border-2 border-obsidian/20 overflow-hidden",
    "dark:border-quartz/20",
  ],
  {
    variants: {
      size: {
        small: ["h-9 w-9"],
        medium: ["h-12 w-12"],
        large: ["h-20 w-20"],
      },
      shape: {
        circle: ["rounded-full"],
        square: ["rounded"],
      },
    },
    compoundVariants: [],
    defaultVariants: {
      size: "small",
      shape: "circle",
    },
  }
);

export default variants;

export type Variants = VariantProps<typeof variants>;
