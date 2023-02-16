import { cva, type VariantProps } from "class-variance-authority";

const variants = cva(
  [
    "rounded px-6 py-2 text-sm font-semibold whitespace-nowrap border",
    "flex items-center gap-2",
    "focus:outline-sky-500 enabled:active:scale-95 disabled:opacity-50",
    "transition-all duration-100 ease-in",
  ],
  {
    variants: {
      intent: {
        primary: [
          "enabled:hover:bg-opacity-80 enabled:hover:border-opacity-10",
        ],
        secondary: [],
        tertiary: ["border-transparent enabled:hover:text-opacity-80"],
      },
      theme: {
        normal: [],
        brand: [],
        success: [],
        warning: [],
        error: [],
      },
      isFull: {
        true: ["w-full", "flex justify-center"],
      },
    },
    compoundVariants: [
      {
        intent: "primary",
        theme: "normal",
        class: [
          "bg-night [&>#spinner]:stroke-day text-day border-night",
          "dark:bg-day dark:text-night dark:border-day dark:[&>#spinner]:stroke-night",
        ],
      },
      {
        intent: "primary",
        theme: "brand",
        class: ["bg-brand [&>#spinner]:stroke-day text-day border-brand"],
      },
      {
        intent: "primary",
        theme: "success",
        class: [
          "bg-success [&>#spinner]:stroke-day text-day border-success",
        ],
      },
      {
        intent: "primary",
        theme: "warning",
        class: [
          "bg-warning [&>#spinner]:stroke-day text-day border-warning",
        ],
      },
      {
        intent: "primary",
        theme: "error",
        class: ["bg-error [&>#spinner]:stroke-day text-day border-error"],
      },
      {
        intent: "secondary",
        theme: "normal",
        class: [
          "border-night [&>#spinner]:stroke-night text-night",
          "enabled:hover:bg-night enabled:hover:text-day",
          "dark:text-day dark:border-day dark:[&>#spinner]:stroke-day",
          "dark:enabled:hover:bg-day dark:enabled:hover:text-night",
        ],
      },
      {
        intent: "secondary",
        theme: "brand",
        class: [
          "border-brand [&>#spinner]:stroke-brand text-brand",
          "enabled:hover:bg-brand enabled:hover:text-day",
        ],
      },
      {
        intent: "secondary",
        theme: "success",
        class: [
          "border-success [&>#spinner]:stroke-success text-success",
          "enabled:hover:bg-success enabled:hover:text-day",
        ],
      },
      {
        intent: "secondary",
        theme: "warning",
        class: [
          "border-warning [&>#spinner]:stroke-warning text-warning",
          "enabled:hover:bg-warning enabled:hover:text-day",
        ],
      },
      {
        intent: "secondary",
        theme: "error",
        class: [
          "border-error [&>#spinner]:stroke-error text-error",
          "enabled:hover:bg-error enabled:hover:text-day",
        ],
      },
      {
        intent: "tertiary",
        theme: "normal",
        class: [
          "text-night [&>#spinner]:stroke-night",
          "dark:text-day dark:[&>#spinner]:stroke-day",
        ],
      },
      {
        intent: "tertiary",
        theme: "brand",
        class: ["text-brand [&>#spinner]:stroke-brand"],
      },
      {
        intent: "tertiary",
        theme: "success",
        class: ["text-success [&>#spinner]:stroke-success"],
      },
      {
        intent: "tertiary",
        theme: "warning",
        class: ["text-warning [&>#spinner]:stroke-warning"],
      },
      {
        intent: "tertiary",
        theme: "error",
        class: ["text-error [&>#spinner]:stroke-error"],
      },
    ],
    defaultVariants: {
      intent: "primary",
      theme: "normal",
    },
  }
);

export default variants;

export type Variants = VariantProps<typeof variants>;
