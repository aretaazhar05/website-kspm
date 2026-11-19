import fs from "node:fs";
import path from "node:path";

const postsDirectory = path.join(
  process.cwd(),
  "CONTENT",
  "03-ARTICLES",
  "posts",
);

export function getArticleMarkdown(slug: string): string {
  if (!/^[a-z0-9-]+$/.test(slug)) {
    throw new Error(`Slug artikel tidak valid: ${slug}`);
  }

  const filePath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    throw new Error(
      `Isi artikel tidak ditemukan. Buat file: CONTENT/03-ARTICLES/posts/${slug}.md`,
    );
  }

  return fs.readFileSync(filePath, "utf8");
}
