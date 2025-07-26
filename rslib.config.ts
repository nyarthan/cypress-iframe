import { defineConfig } from "@rslib/core";

export default defineConfig({
  lib: [{ format: "cjs", syntax: "es2015" }],
  output: { target: "web" },
  source: { entry: { index: "./src/index.ts" } },
});
