"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function BlogListPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://admin.fitgreen.in/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.blogs);
        setLoading(false);
      })
      .catch(() => {
        setBlogs([]);
        setLoading(false);
      });
  }, []);

  // Format date to match "November 24, 2025" format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="blog-page">
      <div className="blog-container">
        {loading ? (
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>Loading blogs...</p>
          </div>
        ) : blogs.length === 0 ? (
          <div className="empty-state">
            <p>No blogs available at the moment.</p>
          </div>
        ) : (
          <div className="list-article">
            {blogs.map((blog) => (
              <article key={blog.id} className="article-item">
                {/* Title Link */}
                <Link href={`/blogs/${blog.id}`} className="article-title-link">
                  <h3 className="article-title">{blog.title}</h3>
                </Link>

                {/* Date and Author */}
                <p className="article-meta">
                  {formatDate(blog.created_at || new Date())} &nbsp;&nbsp; Team FitGreen
                </p>

                {/* Featured Image */}
                <div className="article-featured-image">
                  <div className="image-wrapper">
                    <img
                      src={blog.image_url}
                      alt={blog.title}
                    />
                  </div>
                </div>

                {/* Excerpt */}
                <div className="article-excerpt">
                  <p>
                    {blog.meta_description || blog.content?.replace(/<[^>]*>/g, '').substring(0, 180) ||
                      "Discover the latest insights on healthy eating, nutrition tips, and wellness advice from the FitGreen team. Learn how to make better food choices for a healthier lifestyle."}
                    ...
                  </p>
                </div>

                {/* Read More Button */}
                <div className="article-action">
                  <Link href={`/blogs/${blog.id}`} className="read-more-button">
                    READ MORE
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .blog-page {
          width: 100%;
          min-height: 100vh;
          background: #fff;
          padding: 60px 0;
        }

        .blog-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .list-article {
          display: flex;
          flex-direction: column;
          gap: 80px;
        }

        /* Article Item */
        .article-item {
          background: #fff;
          padding: 0;
        }

        /* Article Title Link */
        .article-title-link {
          text-decoration: none;
          display: inline-block;
          margin-bottom: 8px;
        }

        .article-title {
          font-size: 24px;
          font-weight: 400;
          margin: 0;
          line-height: 1.4;
          color: #1a1a1a;
          transition: color 0.3s ease;
        }

        .article-title-link:hover .article-title {
          color: var(--primary-color);
        }

        /* Article Meta */
        .article-meta {
          font-size: 13px;
          color: #999;
          margin: 0 0 20px 0;
          font-weight: 400;
        }

        /* Featured Image */
        .article-featured-image {
          width: 100%;
          margin-bottom: 25px;
          overflow: hidden;
          border-radius: 0;
        }

        .image-wrapper {
          width: 100%;
          height: 280px;
          overflow: hidden;
          position: relative;
        }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }

        .article-featured-image:hover .image-wrapper img {
          transform: scale(1.08);
        }

        /* Article Excerpt */
        .article-excerpt {
          margin-bottom: 20px;
        }

        .article-excerpt p {
          font-size: 15px;
          line-height: 1.7;
          color: #4a4a4a;
          margin: 0;
        }

        /* Read More Button */
        .article-action {
          margin-bottom: 0;
        }

        .read-more-button {
          display: inline-block;
          padding: 12px 35px;
          background: transparent;
          color: #1a1a1a;
          border: 1px solid #1a1a1a;
          text-decoration: none;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          transition: all 0.3s ease;
        }

        .read-more-button:hover {
          background: var(--primary-color);
          border-color: var(--primary-color);
          color: #fff;
        }

        /* Loading State */
        .loading-state {
          text-align: center;
          padding: 100px 20px;
        }

        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 3px solid #f3f3f3;
          border-top: 3px solid var(--primary-color);
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 20px;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .loading-state p {
          color: #666;
          font-size: 16px;
          margin: 0;
        }

        /* Empty State */
        .empty-state {
          text-align: center;
          padding: 80px 20px;
          background: #f9fafb;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
        }

        .empty-state p {
          color: #666;
          font-size: 16px;
          margin: 0;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .image-wrapper {
            height: 260px;
          }
        }

        @media (max-width: 768px) {
          .blog-page {
            padding: 40px 0;
          }

          .list-article {
            gap: 60px;
          }

          .image-wrapper {
            height: 240px;
          }

          .article-title {
            font-size: 20px;
          }

          .article-meta {
            font-size: 12px;
          }

          .article-excerpt p {
            font-size: 14px;
          }

          .read-more-button {
            padding: 10px 30px;
            font-size: 11px;
          }
        }

        @media (max-width: 480px) {
          .blog-page {
            padding: 30px 0;
          }

          .blog-container {
            padding: 0 16px;
          }

          .list-article {
            gap: 50px;
          }

          .image-wrapper {
            height: 220px;
          }

          .article-title {
            font-size: 18px;
          }

          .read-more-button {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}