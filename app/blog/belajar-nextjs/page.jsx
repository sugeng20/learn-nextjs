import Heading from "@/components/Heading";
import { readFile } from "node:fs/promises";
export default async function PostPage() {
  const text = await readFile("./content/blog/belajar-nextjs.md", "utf-8");
  return (
    <>
      <Heading>Post Page</Heading>
      <img src="/images/images-1.png" width={640} height={360} alt="" />
      <p>{text}</p>
    </>
  );
}
