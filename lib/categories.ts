import type { BlogCategory } from "./site";

const categorySlugMap: Record<string, BlogCategory> = {
  golang: "Golang",
  postgresql: "PostgreSQL",
  "system-design": "System Design",
  "distributed-systems": "Distributed Systems",
  "software-engineering": "Software Engineering",
};

export function categoryToSlug(category: BlogCategory): string {
  return category.toLowerCase().replace(/ /g, "-");
}

export function slugToCategory(slug: string): BlogCategory | null {
  return categorySlugMap[slug] ?? null;
}
