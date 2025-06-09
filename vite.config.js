import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "import",
            {
              libraryName: "react-icons",
              libraryDirectory: "",
              camel2DashComponentName: false,
            },
            "react-icons",
          ],
        ],
      },
    }),
    tailwindcss(), // 👈 stays exactly how Tailwind wants it
  ],
});
