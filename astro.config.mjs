import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeMermaidJs from "rehype-mermaidjs";

/** @type {import('astro').AstroUserConfig} */
export default {
  site: 'https://kumi150.github.io',
  base: '/University-Blog',
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


