import Heading from "@/components/Heading";
import matter from "gray-matter";
import { marked } from "marked";
import { readFile } from "node:fs/promises";
export default async function PostPage() {
  const text = await readFile("./content/blog/belajar-nextjs.md", "utf-8");
  const {
    content,
    data: { title, image, date, author },
  } = matter(text);
  const html = marked(content);

  return (
    <>
      <Heading>{title}</Heading>
      <p className="italic text-sm pb-2">
        {date} by {author}
      </p>
      <img src={image} width={640} height={360} alt="" className="mb-3" />
      <article dangerouslySetInnerHTML={{ __html: html }} className="prose" />
    </>
  );
}
