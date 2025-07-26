import { defineConfig } from "@rslib/core";

export default defineConfig({
  // TODO: enable `dts` after fixing types
  lib: [{ format: "cjs", syntax: "es2015", dts: false }],
  output: { target: "web" },
  source: { entry: { index: "./src/index.ts" } },
});
