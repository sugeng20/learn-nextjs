import Link from "next/link";
import Heading from "../../components/Heading";
export default function BlogPage() {
  return (
    <>
      <Heading>Blog Page</Heading>
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
