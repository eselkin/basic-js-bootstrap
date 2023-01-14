import { defineConfig } from "vite";
import path from "path";

export default defineConfig(({ command, mode, ssrBuild }) => {
  if (command === "serve") {
    return {
      // dev specific config
      root: path.resolve(__dirname, "src"),
      alias: {
        "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
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
      alias: {
        "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
      },
      build: {
        outDir: path.resolve(__dirname, "dist"), // this is usually the default, but since we change the root above we need to set it back to the top level directory
        minify: "esbuild", // this is the default, just showing that it's an option
        sourcemap: false,
        emptyOutDir: true, // cleans up from last build
      },
    };
  }
});
