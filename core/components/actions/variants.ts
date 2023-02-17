import { cva, type VariantProps } from "class-variance-authority";

const variants = cva(
  [
    "rounded px-4 py-2 text-sm font-medium quartzspace-nowrap border border-transparent",
    "flex items-center gap-2",
    "focus:outline-sky-500 enabled:active:scale-95 disabled:opacity-80",
    "transition-all duration-100 ease-in",
  ],
  {
    variants: {
      intent: {
        primary: ["enabled:hover:bg-opacity-80"],
        secondary: [],
        tertiary: ["enabled:hover:text-opacity-80"],
      },
      theme: {
        neutral: [],
        inverse: [],
        quartz: [],
        obsidian: [],
        emerald: [],
        amber: [],
        ruby: [],
      },
      isFull: {
        true: ["w-full"],
      },
    },
    compoundVariants: [
      {
        intent: "primary",
        theme: "neutral",
        class: [
          "bg-quartz text-obsidian [&>#spinner]:stroke-obsidian",
          "dark:bg-obsidian dark:text-quartz dark:[&>#spinner]:stroke-quartz",
        ],
      },
      {
        intent: "primary",
        theme: "inverse",
        class: [
          "bg-obsidian text-quartz [&>#spinner]:stroke-quartz",
          "dark:bg-quartz dark:text-obsidian dark:[&>#spinner]:stroke-obsidian",
        ],
      },
      {
        intent: "primary",
        theme: "quartz",
        class: ["bg-quartz text-obsidian [&>#spinner]:stroke-obsidian"],
      },
      {
        intent: "primary",
        theme: "obsidian",
        class: ["bg-obsidian text-quartz [&>#spinner]:stroke-quartz"],
      },
      {
        intent: "primary",
        theme: "emerald",
        class: ["bg-emerald [&>#spinner]:stroke-quartz text-quartz"],
      },
      {
        intent: "primary",
        theme: "amber",
        class: ["bg-amber [&>#spinner]:stroke-quartz text-quartz"],
      },
      {
        intent: "primary",
        theme: "ruby",
        class: ["bg-ruby [&>#spinner]:stroke-quartz text-quartz"],
      },
      {
        intent: "secondary",
        theme: "neutral",
        class: [
          "text-obsidian border-quartz [&>#spinner]:stroke-obsidian",
          "enabled:hover:bg-quartz",
          "dark:enabled:hover:bg-obsidian dark:text-quartz dark:border-obsidian",
          "dark:text-quartz dark:enabled:hover:border-obsidian dark:[&>#spinner]:stroke-quartz",
        ],
      },
      {
        intent: "secondary",
        theme: "inverse",
        class: [
          "text-obsidian border-obsidian [&>#spinner]:stroke-obsidian",
          "enabled:hover:bg-obsidian enabled:hover:border-quartz enabled:hover:text-quartz",
          "dark:text-quartz dark:border-quartz dark:[&>#spinner]:stroke-quartz dark:enabled:hover:bg-quartz dark:enabled:hover:text-obsidian",
        ],
      },
      {
        intent: "secondary",
        theme: "quartz",
        class: [
          "text-obsidian border-quartz [&>#spinner]:stroke-obsidian",
          "enabled:hover:bg-quartz enabled:hover:border-quartz",
          "dark:text-quartz dark:border-quartz dark:enabled:hover:text-obsidian dark:[&>#spinner]:stroke-quartz",
        ],
      },
      {
        intent: "secondary",
        theme: "obsidian",
        class: [
          "text-obsidian border-obsidian [&>#spinner]:stroke-obsidian",
          "enabled:hover:bg-obsidian enabled:hover:text-quartz",
          "dark:text-quartz dark:enabled:hover:border-obsidian dark:[&>#spinner]:stroke-quartz",
        ],
      },
      {
        intent: "secondary",
        theme: "emerald",
        class: [
          "text-emerald border-emerald [&>#spinner]:stroke-emerald",
          "enabled:hover:bg-emerald enabled:hover:text-quartz",
        ],
      },
      {
        intent: "secondary",
        theme: "amber",
        class: [
          "text-amber border-amber [&>#spinner]:stroke-amber",
          "enabled:hover:bg-amber enabled:hover:text-quartz",
        ],
      },
      {
        intent: "secondary",
        theme: "ruby",
        class: [
          "text-ruby border-ruby [&>#spinner]:stroke-ruby",
          "enabled:hover:bg-ruby enabled:hover:text-quartz",
        ],
      },
      {
        intent: "tertiary",
        theme: "neutral",
        class: [
          "text-obsidian [&>#spinner]:stroke-obsidian",
          "dark:text-quartz dark:[&>#spinner]:stroke-quartz",
        ],
      },
      {
        intent: "tertiary",
        theme: "inverse",
        class: [
          "text-obsidian [&>#spinner]:stroke-obsidian",
          "dark:text-quartz dark:[&>#spinner]:stroke-quartz",
        ],
      },
      {
        intent: "tertiary",
        theme: "quartz",
        class: [
          "text-obsidian [&>#spinner]:stroke-obsidian",
          "dark:text-quartz dark:[&>#spinner]:stroke-quartz",
        ],
      },
      {
        intent: "tertiary",
        theme: "obsidian",
        class: [
          "text-obsidian [&>#spinner]:stroke-obsidian",
          "dark:text-quartz dark:[&>#spinner]:stroke-quartz",
        ],
      },
      {
        intent: "tertiary",
        theme: "emerald",
        class: ["text-emerald [&>#spinner]:stroke-emerald"],
      },
      {
        intent: "tertiary",
        theme: "amber",
        class: ["text-amber [&>#spinner]:stroke-amber"],
      },
      {
        intent: "tertiary",
        theme: "ruby",
        class: ["text-ruby [&>#spinner]:stroke-ruby"],
      },
    ],
    defaultVariants: {
      intent: "primary",
      theme: "neutral",
    },
  }
);

export default variants;

export type Variants = VariantProps<typeof variants>;
