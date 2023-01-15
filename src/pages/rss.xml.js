import rss from "@astrojs/rss";
import { SITE_TITLE } from "../config";

export const get = () =>
  rss({
    title: SITE_TITLE,
    description: "A blog about web development and other things",
    site: import.meta.env.SITE,
    items: import.meta.glob("./blog/**/*.{md,mdx}"),
  });
