import type { UserConfig } from "vite";
import marko from "../../..";

export const config = {
  plugins: [marko({ linked: false })],
} as UserConfig;

export const targets = ["browser"];