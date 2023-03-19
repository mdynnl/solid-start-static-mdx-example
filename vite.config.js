import solidStartStatic from "solid-start-static";
import solid from "solid-start/vite";
import { defineConfig } from "vite";
export default defineConfig({
  plugins: [
    {
      ...(await import("@mdx-js/rollup")).default({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "/node_modules/solid-mdx",
      }),
      enforce: "pre",
    },
    solid({
      extensions: [".mdx", ".md"],
      adapter: solidStartStatic(),
    }),
  ],
});
