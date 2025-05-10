import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

export interface Post {
  title: string;
  date: string;
  slug: string;
  content: string;
}

function getPostsFromFolder(folderName: string): Post[] {
  const postsDirectory = path.join(process.cwd(), folderName);
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const htmlContent = md.render(content);
    return {
      title: data.title || "Título por defecto",
      date: data.date || "Fecha por defecto",
      slug: fileName.replace(/\.md$/, ""),
      content: htmlContent,
    };
  });
}

export function getAllPosts(folder: string): Post[] {
  return getPostsFromFolder(folder);
}

export function getPostBySlug(folder: string, slug: string): Post | null {
  const posts = getPostsFromFolder(folder);
  return posts.find((post) => post.slug === slug) || null;
}
