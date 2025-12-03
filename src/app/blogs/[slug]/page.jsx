import BlogPage from "./BlogPage";

export async function generateStaticParams() {
  try {
    const res = await fetch("https://admin.fitgreen.in/api/blogs", {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error('Failed to fetch blogs for static generation');
      return [];
    }

    const data = await res.json();

    // FIX: ensure we always use an ARRAY
    const blogs = Array.isArray(data.blogs) ? data.blogs : [];

    // Filter out items without slug or id, and use id if slug is not available
    return blogs
      .filter(item => item.slug || item.id)
      .map((item) => ({
        slug: String(item.slug || item.id),
      }));
  } catch (error) {
    console.error('Error generating static params for blogs:', error);
    return [];
  }
}

export default function Page({ params }) {
  return <BlogPage slug={params.slug} />;
}
