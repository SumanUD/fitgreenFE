"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function BlogPage({ slug }) {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://admin.fitgreen.in/api/blogs/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data.blog);
        setLoading(false);
      })
      .catch(() => {
        setBlog(null);
        setLoading(false);
      });
  }, [slug]);

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="loading-wrapper">
        <div className="loading-spinner"></div>
        <p>Loading blog...</p>
        <style jsx>{`
          .loading-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 60vh;
            padding: 40px 20px;
          }
          .loading-spinner {
            width: 50px;
            height: 50px;
            border: 3px solid #f3f3f3;
            border-top: 3px solid #4caf50;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-bottom: 20px;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .loading-wrapper p {
            color: #666;
            font-size: 16px;
          }
        `}</style>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="error-wrapper">
        <h2>Blog not found</h2>
        <Link href="/blogs" className="back-link">← Back to Blogs</Link>
        <style jsx>{`
          .error-wrapper {
            text-align: center;
            padding: 80px 20px;
            min-height: 50vh;
          }
          .error-wrapper h2 {
            font-size: 32px;
            color: #333;
            margin-bottom: 20px;
          }
          .back-link {
            color: #4caf50;
            text-decoration: none;
            font-weight: 600;
            font-size: 16px;
          }
          .back-link:hover {
            text-decoration: underline;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="blog-wrapper">
      {/* Back Button */}
      <div className="back-nav">
        <Link href="/blogs" className="back-button">
          <i className="fas fa-arrow-left"></i> Back to Blogs
        </Link>
      </div>

      <section
        className="blog-hero"
        style={{
          backgroundImage: `url(${blog.image_url})`,
        }}
      >
        <div className="overlay"></div>
        <div className="hero-content">
          <h1 className="blog-title">{blog.title}</h1>
          <div className="blog-meta">
            <span className="meta-item">
              <i className="fas fa-user"></i> Team FitGreen
            </span>
            <span className="meta-divider">•</span>
            <span className="meta-item">
              <i className="fas fa-calendar"></i> {formatDate(blog.created_at || new Date())}
            </span>
          </div>
        </div>
      </section>

      <div className="blog-container">
        <article className="blog-content">
          <div
            className="content-html"
            dangerouslySetInnerHTML={{ __html: blog.description }}
          />
        </article>

        {/* Back to Blogs button at bottom */}
        <div className="bottom-nav">
          <Link href="/blogs" className="back-to-blogs-btn">
            <i className="fas fa-arrow-left"></i> Back to All Blogs
          </Link>
        </div>
      </div>

      <style jsx>{`
        .blog-wrapper {
          background: #f8fafc;
          min-height: 100vh;
          padding-bottom: 60px;
        }

        /* Back Navigation */
        .back-nav {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 20px 0;
        }

        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #4caf50;
          text-decoration: none;
          font-size: 15px;
          font-weight: 600;
          transition: all 0.3s ease;
          padding: 8px 0;
        }

        .back-button:hover {
          color: #3d8b40;
          gap: 12px;
        }

        .back-button i {
          font-size: 14px;
        }

        /* Hero Section */
        .blog-hero {
          width: 100%;
          height: 450px;
          background-size: cover;
          background-position: center;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 50px;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7));
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1000px;
          padding: 0 20px;
          text-align: center;
        }

        .blog-title {
          color: #fff;
          font-size: 48px;
          font-weight: 700;
          line-height: 1.2;
          margin: 0 0 20px 0;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          font-family: 'Montserrat', sans-serif;
        }

        .blog-meta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          color: rgba(255, 255, 255, 0.95);
          font-size: 15px;
        }

        .meta-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .meta-item i {
          font-size: 14px;
        }

        .meta-divider {
          opacity: 0.6;
        }

        /* Blog Container */
        .blog-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .blog-content {
          background: #fff;
          border-radius: 12px;
          padding: 50px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          margin-bottom: 40px;
        }

        /* Content Styling */
        .content-html {
          font-size: 17px;
          line-height: 1.8;
          color: #374151;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .content-html :global(h1),
        .content-html :global(h2),
        .content-html :global(h3),
        .content-html :global(h4) {
          color: #1f2937;
          font-weight: 700;
          margin: 35px 0 20px 0;
          line-height: 1.3;
          font-family: 'Montserrat', sans-serif;
        }

        .content-html :global(h1) {
          font-size: 36px;
        }

        .content-html :global(h2) {
          font-size: 30px;
        }

        .content-html :global(h3) {
          font-size: 24px;
        }

        .content-html :global(h4) {
          font-size: 20px;
        }

        .content-html :global(p) {
          margin: 0 0 20px 0;
        }

        .content-html :global(img) {
          width: 100%;
          max-width: 100%;
          height: auto;
          border-radius: 12px;
          margin: 30px 0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .content-html :global(a) {
          color: #4caf50;
          text-decoration: none;
          border-bottom: 1px solid #4caf50;
          transition: all 0.3s ease;
        }

        .content-html :global(a:hover) {
          color: #3d8b40;
          border-bottom-color: #3d8b40;
        }

        .content-html :global(ul),
        .content-html :global(ol) {
          margin: 20px 0;
          padding-left: 30px;
        }

        .content-html :global(li) {
          margin: 10px 0;
        }

        .content-html :global(blockquote) {
          border-left: 4px solid #4caf50;
          padding-left: 20px;
          margin: 30px 0;
          font-style: italic;
          color: #6b7280;
          background: #f9fafb;
          padding: 20px 20px 20px 25px;
          border-radius: 0 8px 8px 0;
        }

        .content-html :global(code) {
          background: #f3f4f6;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 0.9em;
          font-family: 'Courier New', monospace;
        }

        .content-html :global(pre) {
          background: #1f2937;
          color: #f3f4f6;
          padding: 20px;
          border-radius: 8px;
          overflow-x: auto;
          margin: 25px 0;
        }

        .content-html :global(pre code) {
          background: transparent;
          padding: 0;
          color: inherit;
        }

        /* Bottom Navigation */
        .bottom-nav {
          text-align: center;
          margin-top: 40px;
        }

        .back-to-blogs-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          background: #4caf50;
          color: white;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          font-family: 'Montserrat', sans-serif;
        }

        .back-to-blogs-btn:hover {
          background: #3d8b40;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
        }

        .back-to-blogs-btn i {
          font-size: 14px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .blog-hero {
            height: 350px;
            margin-bottom: 40px;
          }

          .blog-title {
            font-size: 36px;
          }

          .blog-meta {
            font-size: 14px;
            flex-wrap: wrap;
          }

          .blog-content {
            padding: 35px 25px;
          }

          .content-html {
            font-size: 16px;
          }

          .content-html :global(h1) {
            font-size: 30px;
          }

          .content-html :global(h2) {
            font-size: 26px;
          }

          .content-html :global(h3) {
            font-size: 22px;
          }
        }

        @media (max-width: 480px) {
          .blog-hero {
            height: 300px;
          }

          .blog-title {
            font-size: 28px;
          }

          .blog-meta {
            font-size: 13px;
          }

          .blog-content {
            padding: 25px 20px;
            border-radius: 8px;
          }

          .content-html {
            font-size: 15px;
          }

          .content-html :global(h1) {
            font-size: 26px;
          }

          .content-html :global(h2) {
            font-size: 23px;
          }

          .content-html :global(h3) {
            font-size: 20px;
          }

          .back-to-blogs-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
