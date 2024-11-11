import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Allows using @ as an alias for the src directory
    },
  },
  server: {
    port: 5173, // Specify the development server port
    open: true, // Automatically open the app in the browser on server start
  },
  build: {
    outDir: "dist", // Specify the output directory for the production build
    sourcemap: true, // Enable sourcemaps for easier debugging in production
  },
  define: {
    "process.env": {}, // Provides an empty object for process.env if needed
  },
});
