import { defineConfig } from "tsup";

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  entry: ["src/index.ts"],
  dts: true,
  minify: true,
  format: ["cjs"],
  outDir: "dist",
  clean: true,
  sourcemap: true,
});
