import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeMermaidJs from "rehype-mermaidjs";

/** @type {import('astro').AstroUserConfig} */
export default {
  site: 'https://ekino.github.io',
  base: '/math-journal',
  integrations: [
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex, rehypeMermaidJs]
    }),
    tailwind()
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex, rehypeMermaidJs]
  }
};


