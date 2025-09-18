import { defineConfig } from "@nyarthan/prettier-config";

export default defineConfig({
  overrides: {
    plugins: ["prettier-plugin-packagejson"],
  },
});
