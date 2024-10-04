import Link from "next/link";

export default function BlogPage() {
  return (
    <>
      <h1>Blog Page</h1>
      <p>List Of Posts</p>
      <ul>
        <li>
          <Link href="/blog/latihan-route-next">Latihan Route Next</Link>
        </li>
        <li>
          <Link href="/blog/belajar-nextjs">Belajar Nextjs</Link>
        </li>
      </ul>
    </>
  );
}
