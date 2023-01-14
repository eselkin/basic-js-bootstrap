import { defineConfig } from "vite";
import path from "path";

export default defineConfig(({ command, mode, ssrBuild }) => {
  if (command === "serve") {
    return {
      // dev specific config
      root: path.resolve(__dirname, "src"),
      build: {
        outDir: path.resolve(__dirname, "dist"),
        minify: false,
        sourcemap: true,
      },
      server: {
        port: 3000,
        hot: true,
      },
    };
  } else {
    // command === 'build'
    return {
      // build specific config
      root: path.resolve(__dirname, "src"),
      build: {
        outDir: path.resolve(__dirname, "dist"),
        minify: "esbuild", // this is the default, just showing that it's an option
        sourcemap: false,
      },
    };
  }
});
