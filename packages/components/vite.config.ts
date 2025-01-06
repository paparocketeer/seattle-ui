import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import DefineOptions from "unplugin-vue-define-options/vite";
export default defineConfig({
  build: {
    outDir: "es",
    //minify: false,
    rollupOptions: {
      external: ["vue"],
      input: ["index.ts"],
      output: [
        {
          format: "es",
          entryFileNames: "[name].mjs",
          preserveModules: true,
          exports: "named",
          dir: "../seattle-ui/es",
        },
        {
          format: "cjs",
          entryFileNames: "[name].js",
          preserveModules: true,
          exports: "named",
          dir: "../seattle-ui/lib",
        },
      ],
    },
    lib: {
      entry: "./index.ts",
    },
  },
  plugins: [
    vue(),
    dts({
      entryRoot: "./src",
      outputDir: ["../seattle-ui/es/src", "../seattle-ui/lib/src"],
      tsConfigFilePath: "../../tsconfig.json",
    }),
    DefineOptions(),
  ],
});