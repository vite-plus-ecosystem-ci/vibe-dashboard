import tailwindcss from "@tailwindcss/vite";
import { playwright } from "vite-plus/test/browser-playwright";
import { defineConfig } from "vite-plus";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss()],
  base: "/vibe-dashboard/",
  build: {
    rolldownOptions: {
      output: {
        strictExecutionOrder: false,
      },
    },
  },
  test: {
    clearMocks: false,
    browser: {
      locators: { exact: false },
      enabled: true,
      provider: playwright(),
      headless: true,
      instances: [
        {
          browser: "chromium",
        },
      ],
    },
  },
});
