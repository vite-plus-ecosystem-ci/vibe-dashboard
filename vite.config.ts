import { defineConfig } from "vite-plus";

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  lint: {
    plugins: ["unicorn", "typescript", "oxc", "react", "vitest", "jsx-a11y", "import"],
    categories: {
      correctness: "deny",
      suspicious: "warn",
      perf: "deny",
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "no-debugger": "error",
      "import/no-unassigned-import": ["error", { allow: ["**/*.css"] }],
    },
    ignorePatterns: ["dist"],
    options: {
      typeCheck: true,
      typeAware: true,
    },
  },
  test: {
    // Vitest v4 compatibility: preserve mock call history.
    // Remove after tests no longer rely on calls from setup or earlier tests.
    // https://release-v1-0-0-rc-1-viteplus-dev.voidzero-docs.workers.dev/guide/vitest-v5#remove-unneeded-compatibility-settings
    // https://vitest.dev/guide/migration/#clearmocks-is-enabled-by-default
    clearMocks: false,
    projects: ["apps/dashboard"],
  },
});
