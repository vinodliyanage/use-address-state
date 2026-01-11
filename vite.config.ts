import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === "lib") {
    // Library build configuration
    return {
      plugins: [
        dts({
          include: ["src/lib"],
          outDir: "dist",
          rollupTypes: true,
        }),
      ],
      build: {
        lib: {
          entry: resolve(__dirname, "src/lib/index.ts"),
          name: "useAddressState",
          fileName: "use-address-state",
        },
        rollupOptions: {
          external: ["react", "react-dom"],
          output: {
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
            },
          },
        },
      },
    };
  }

  // Dev/example build configuration
  return {
    plugins: [react()],
    base: process.env.BASE_URL || "/",
  };
});
