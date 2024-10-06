import Heading from "@/components/Heading";
import { getPost } from "@/lib/post";

export async function generateMetadata({ params: { slug } }) {
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({ params: { slug } }) {
  const post = await getPost(slug);
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
