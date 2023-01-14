import { defineConfig } from "vite";
import path from "path";

export default defineConfig(({ command, mode, ssrBuild }) => {
  if (command === "serve") {
    return {
      // dev specific config
      build: {
        root: path.resolve(__dirname, "src"),
        outDir: "dist",
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
      build: {
        root: path.resolve(__dirname, "src"),
        outDir: "dist",
        minify: "esbuild", // this is the default, just showing that it's an option
        sourcemap: false,
      },
    };
  }
});
