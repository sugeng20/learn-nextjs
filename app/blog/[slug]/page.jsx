import Heading from "@/components/Heading";
import { getPost, getSlugs } from "@/lib/post";
import ShareLinkButton from "@/components/ShareLinkButton";

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug: slug }));
}

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
      <div className="flex gap-3 pb-2 items-baseline">
        <p className="italic text-sm pb-2">
          {post.date} by {post.author}
        </p>

        <ShareLinkButton />
      </div>
      <img src={post.image} width={640} height={360} alt="" className="mb-3" />
      <article
        dangerouslySetInnerHTML={{ __html: post.body }}
        className="prose"
      />
    </>
  );
}
