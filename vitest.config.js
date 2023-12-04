import {
    configDefaults,
    defineConfig,
    mergeConfig,
  } from 'vitest/config';
  import viteConfig from './vite.config';
  import { resolve } from "node:path";
  
  const config = mergeConfig(
    viteConfig, // Extending from an existing Vite configuration (`vite.config.ts` file)
    defineConfig({
      test: {
        ...configDefaults, // Extending Vitest's default options
        environment: "jsdom",
        globals: true
      },
      resolve: {
        alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
      },
    }),
  );
  
  export default config;