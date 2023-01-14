import { defineConfig } from "vite";

export default defineConfig(({ command, mode, ssrBuild }) => {
  if (command === "serve") {
    return {
      // dev specific config
      build: {
        outDir: "dist",
        minify: false,
        sourcemap: true,
      },
    };
  } else {
    // command === 'build'
    return {
      // build specific config
      build: {
        outDir: "dist",
        minify: "esbuild", // this is the default, just showing that it's an option
        sourcemap: false,
      },
    };
  }
});
