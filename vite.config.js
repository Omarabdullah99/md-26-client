import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": {
        target: "https://ostad-backend-md26-ass.vercel.app",
        changeOrigin: true,
        secure: false,
        // Optional: যদি API endpoint-এ rewrite দরকার হয়
        // rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
});
