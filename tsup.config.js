import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  dts: true,
  minify: true,
  format: ["cjs", "esm"],
  outDir: "dist",
  clean: true,
  sourcemap: true,
});
