import Heading from "@/components/Heading";
import PostCard from "@/components/PostCard";

export default function BlogPage() {
  return (
    <>
      <Heading>Blog Page</Heading>
      <h2 className="text-2xl mb-3">List Of Posts</h2>

      <PostCard
        title="Belajar Next.js"
        href="/blog/belajar-nextjs"
        description="Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
          vulputate. Ut vulputate est non quam dignissim elementum. Donec a
          ullamcorper diam."
        date="13.01.2022"
        author="Admin"
        image="/images/images-1.png"
      />
      <PostCard
        title="Belajar Next.js"
        href="/blog/belajar-nextjs"
        description="Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
          vulputate. Ut vulputate est non quam dignissim elementum. Donec a
          ullamcorper diam."
        date="13.01.2022"
        author="Admin"
        image="/images/images-2.png"
      />
      <PostCard
        title="Belajar Next.js"
        href="/blog/belajar-nextjs"
        description="Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
          vulputate. Ut vulputate est non quam dignissim elementum. Donec a
          ullamcorper diam."
        date="13.01.2022"
        author="Admin"
        image="/images/images-1.png"
      />
    </>
  );
}
