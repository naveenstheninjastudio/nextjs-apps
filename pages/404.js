import Link from "next/link";

export default function NotFound() {
  return (
    <div className="notfound">
      <h1>oooops.....</h1>
      <h2>that page cannot be found</h2>
      <Link href="/">homepage</Link>
    </div>
  );
}
