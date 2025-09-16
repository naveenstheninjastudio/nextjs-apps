import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="navLogo"></div>
      <Link href="../">Home</Link>
      <Link href="/blog">Blog</Link>
    </nav>
  );
}
