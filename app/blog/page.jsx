import Heading from "@/components/Heading";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/post";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <Heading>Blog Page</Heading>
      <h2 className="text-2xl mb-3">List Of Posts</h2>

      {posts.map((post, index) => {
        return (
          <PostCard
            key={index}
            title={post.title}
            href="/blog/belajar-nextjs"
            description="Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
          vulputate. Ut vulputate est non quam dignissim elementum. Donec a
          ullamcorper diam."
            date={post.date}
            author={post.author}
            image={post.image}
          />
        );
      })}
    </>
  );
}
