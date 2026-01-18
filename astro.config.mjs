import { defineConfig } from "astro/config";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserPages = repo.endsWith(".github.io");
const base = isUserPages ? "/" : `/${repo}`;

export default defineConfig({
  output: "static",
  base
});
