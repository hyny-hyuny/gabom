import { defineConfig } from "vite";
import { resolve } from "node:path";

const viteConfig = defineConfig({
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  build: {
    outDir: "docs",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
});

export default viteConfig;
