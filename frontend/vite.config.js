import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],

  server: {
    host: "0.0.0.0", // allow access from Windows host
    port: 5173,
    strictPort: true,
    open: false,

    watch: {
      usePolling: true, // important for WSL file watching
    },

    hmr: {
      protocol: "ws",
      host: "localhost", // browser connects here
      port: 5173,
      clientPort: 5173,
    },
  },
});
