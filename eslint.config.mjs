import { defineConfig, globalIgnores } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextCoreWebVitals,
  {
    // This is a standalone React static bundle, not Next.js-rendered JSX.
    // Backend uploads are already compressed WebP; next/image needs a server.
    files: ["github-pages/**/*.{ts,tsx}"],
    rules: { "@next/next/no-img-element": "off" },
  },
  globalIgnores([".next/**", "out/**", "out-pages/**", "build/**", "next-env.d.ts"]),
]);
