import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogCategory } from "./site";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
  category: BlogCategory;
  published?: boolean;
};

export type Post = PostFrontmatter & {
  slug: string;
  content: string;
  readingTime: string;
};

export type NoteFrontmatter = {
  title: string;
  description: string;
  date: string;
  published?: boolean;
};

export type Note = NoteFrontmatter & {
  slug: string;
  content: string;
  readingTime: string;
};

function getMdxFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

function parsePost(slug: string, type: "blog" | "notes"): Post | Note | null {
  const filePath = path.join(CONTENT_DIR, type, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  if (data.published === false) return null;

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    ...(type === "blog" && { category: data.category }),
    content,
    readingTime: stats.text,
  } as Post | Note;
}

export function getAllPosts(): Post[] {
  const slugs = getMdxFiles(path.join(CONTENT_DIR, "blog"));
  return slugs
    .map((slug) => parsePost(slug, "blog") as Post | null)
    .filter((post): post is Post => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | null {
  return parsePost(slug, "blog") as Post | null;
}

export function getPostsByCategory(category: BlogCategory): Post[] {
  return getAllPosts().filter((post) => post.category === category);
}

export function getAllNotes(): Note[] {
  const slugs = getMdxFiles(path.join(CONTENT_DIR, "notes"));
  return slugs
    .map((slug) => parsePost(slug, "notes") as Note | null)
    .filter((note): note is Note => note !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getNoteBySlug(slug: string): Note | null {
  return parsePost(slug, "notes") as Note | null;
}

export function getAllPostSlugs(): string[] {
  return getMdxFiles(path.join(CONTENT_DIR, "blog"));
}

export function getAllNoteSlugs(): string[] {
  return getMdxFiles(path.join(CONTENT_DIR, "notes"));
}
