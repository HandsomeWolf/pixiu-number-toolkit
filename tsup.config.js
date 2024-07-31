import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/validation/index.ts',
  ],
  dts: true,
  minify: true,
  format: ['cjs', 'esm'],
  outDir: 'dist',
  clean: true,
  sourcemap: true,
  splitting: true,
  treeshake: true,
});
