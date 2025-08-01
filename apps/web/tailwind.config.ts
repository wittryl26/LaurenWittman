import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
  content: [
    "./app/**/*.tsx",
    "./components/**/*.tsx",
    "../../packages/ui/src/**/*.tsx",
  ],
  presets: [sharedConfig],
};

export default config;
