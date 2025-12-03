import BlogPage from "./BlogPage";

export async function generateStaticParams() {
  const res = await fetch("http://admin.fitgreen.in/api/blogs", {
    cache: "no-store",
  });

  const data = await res.json();

  // FIX: ensure we always use an ARRAY
  const blogs = Array.isArray(data.blogs) ? data.blogs : [];

  return blogs.map((item) => ({
    slug: item.slug,
  }));
}

export default function Page({ params }) {
  return <BlogPage slug={params.slug} />;
}
