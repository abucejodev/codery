import { cva, type VariantProps } from "class-variance-authority";

const variants = cva(
  [
    "rounded px-4 py-2 text-sm font-semibold whitespace-nowrap",
    "flex items-center gap-2",
    "focus:outline-sky-500 enabled:active:scale-95 disabled:opacity-50",
    "transition-all duration-100 ease-in",
  ],
  {
    variants: {
      intent: {
        primary: [],
        secondary: [],
        tertiary: [],
      },
      mode: {
        normal: [],
        success: [],
        warning: [],
        danger: [],
      },
      isFull: {
        true: ["w-full", "flex justify-center"],
      },
    },
    compoundVariants: [
      // primary
      {
        intent: "primary",
        mode: "normal",
        class: [],
      },
      {
        intent: "primary",
        mode: "success",
        class: [],
      },
      {
        intent: "primary",
        mode: "warning",
        class: [],
      },
      {
        intent: "primary",
        mode: "danger",
        class: [],
      },
      // secondary
      {
        intent: "secondary",
        mode: "normal",
        class: [],
      },
      {
        intent: "secondary",
        mode: "success",
        class: [],
      },
      {
        intent: "secondary",
        mode: "warning",
        class: [],
      },
      {
        intent: "secondary",
        mode: "danger",
        class: [],
      },
      // tertiary
      {
        intent: "tertiary",
        mode: "normal",
        class: [],
      },
      {
        intent: "tertiary",
        mode: "success",
        class: [],
      },
      {
        intent: "tertiary",
        mode: "warning",
        class: [],
      },
      {
        intent: "tertiary",
        mode: "danger",
        class: [],
      },
    ],
    defaultVariants: {
      intent: "primary",
      mode: "normal",
    },
  }
);

export default variants;

export type Variants = VariantProps<typeof variants>;
