import Heading from "@/components/Heading";
import { getPost } from "@/lib/post";

export default async function PostPage() {
  const post = await getPost("belajar-nextjs");
  return (
    <>
      <Heading>{post.title}</Heading>
      <p className="italic text-sm pb-2">
        {post.date} by {post.author}
      </p>
      <img src={post.image} width={640} height={360} alt="" className="mb-3" />
      <article
        dangerouslySetInnerHTML={{ __html: post.body }}
        className="prose"
      />
    </>
  );
}
