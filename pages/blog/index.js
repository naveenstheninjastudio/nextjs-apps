import Link from "next/link";
import styles from "@/styles/blog.module.css";
import data from "@/pages/blog/blackpink.json";

export const getStaticProps = async () => {
  return {
    props: { blog: data },
  };
};

export default function BlogPage({ blog }) {
  return (
    <div>
      {blog.map((e) => (
        <Link href={`/blog/${e.id}`} className={styles.blogItem} key={e.id}>
          <h2>{e.name}</h2>
          <img src={e.image} alt={e.name} />
        </Link>
      ))}
    </div>
  );
}
