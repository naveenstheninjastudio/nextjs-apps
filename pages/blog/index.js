import Link from "next/link";

import "@/styles/blog.module.css";
export default function BlogPage() {
  return (
    <div>
      <div className="main">blog index page</div>
      <p>
        <Link href="/blog/post1">post1</Link>
      </p>
      <p>
        <Link href="/blog/post2">post2</Link>
      </p>
      <p>
        <Link href="../">home</Link>
      </p>
    </div>
  );
}
