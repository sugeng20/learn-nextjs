import Heading from "@/components/Heading";
import { marked } from "marked";
import { readFile } from "node:fs/promises";
export default async function PostPage() {
  const text = await readFile("./content/blog/belajar-nextjs.md", "utf-8");
  const html = marked(text);

  return (
    <>
      <Heading>Post Page</Heading>
      <img src="/images/images-1.png" width={640} height={360} alt="" />
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
