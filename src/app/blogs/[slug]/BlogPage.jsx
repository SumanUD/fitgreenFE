"use client";

import { useEffect, useState } from "react";

export default function BlogPage({ slug }) {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`http://admin.fitgreen.in/api/blogs/${slug}`)
      .then((res) => res.json())
      .then((data) => setBlog(data.blog))
      .catch(() => setBlog(null));
  }, [slug]);

  if (!blog)
    return (
      <p style={{ padding: 40, textAlign: "center" }}>Loading...</p>
    );

  return (
    <div className="blog-wrapper">

      <section
        className="blog-hero"
        style={{
          backgroundImage: `url(${blog.image_url})`,
        }}
      >
        <div className="overlay"></div>
        <h1 className="blog-title">{blog.title}</h1>
      </section>

      <div className="blog-container">
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        />
      </div>

      <style jsx>{`
        .blog-hero {
          width: 100%;
          height: 380px;
          background-size: cover;
          background-position: center;
          border-radius: 0 0 20px 20px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          border-radius: 0 0 20px 20px;
        }

        .blog-title {
          position: relative;
          color: #fff;
          z-index: 2;
          font-size: 42px;
          font-weight: 700;
          text-align: center;
          padding: 0 20px;
          max-width: 900px;
          line-height: 1.3;
        }

        .blog-container {
          max-width: 900px;
          margin: 40px auto;
          padding: 0 20px;
        }

        .blog-content img {
          width: 100%;
          border-radius: 12px;
          margin: 25px 0;
        }
      `}</style>
    </div>
  );
}
