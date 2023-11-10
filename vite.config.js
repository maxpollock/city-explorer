import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugin = {
  registerType: "prompt",
  includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
  manifest: {
    name: "city explorer",
    short_name: "city explorer",
    description: "explore a city to find out more.",
    icons: [
      {
        src: "https://img.icons8.com/doodle/48/building--v1.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "https://img.icons8.com/doodle/48/building--v1.png",
        sizes: "512x512",
        type: "image/png",
      },

      {
        src: "https://img.icons8.com/doodle/48/building--v1.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "apple touch icon",
      },
      {
        src: "https://img.icons8.com/doodle/48/building--v1.png",
        sizes: "255x255",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    theme_color: "#fefefe",
    background_color: "#efefef",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
});
