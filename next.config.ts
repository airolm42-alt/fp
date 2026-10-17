import type { NextConfig } from "next";

const privateExportFiles = [
  "./src/**/*", "./scripts/**/*", "./public/**/*", "./drizzle/**/*", "./github-pages/**/*", "./.github/workflows/github-pages.yml",
  "./package.json", "./package-lock.json", "./tsconfig.json", "./next-env.d.ts", "./next.config.ts", "./postcss.config.mjs", "./eslint.config.mjs", "./drizzle.config.ts",
  "./.env.example", "./.gitignore", "./.nvmrc", "./PROJECT-FILES.json", "./README.md", "./START-HERE.html", "./DEPLOYMENT-AR.md", "./AUDIT-REPORT-AR.md", "./GITHUB-PAGES-AR.md",
];
const nextConfig: NextConfig = {
  poweredByHeader: false,
  serverExternalPackages: ["esbuild"],
  async headers() {
    return [{ source: "/:path*", headers: [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
    ] }];
  },
  // Private owner downloads need source files; none of these are public assets.
  outputFileTracingIncludes: {
    "/api/admin/publishing/source": privateExportFiles,
    "/api/admin/publishing/pages": privateExportFiles,
  },
};
export default nextConfig;
