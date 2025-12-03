"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function BlogListPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://admin.fitgreen.in/api/blogs")
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
      {/* PAGE BANNER */}
      <div className="banner">
        <h1>Our Blogs</h1>

      </div>

      {/* BLOG LIST */}
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
          <div className="blog-list">
            {blogs.map((blog) => (
              <div key={blog.id} className="blog-card">
                {/* Blog Title at the top */}
                <div className="blog-header">
                  <h2 className="blog-title">
                    {blog.title}
                  </h2>
                  
                  {/* Author and Date */}
                  <div className="blog-meta">
                    <span className="blog-author">
                      <i className="fas fa-user"></i> Team FitGreen
                    </span>
                    <span className="blog-date">
                      <i className="fas fa-calendar"></i> {formatDate(blog.created_at || new Date())}
                    </span>
                  </div>
                </div>

                {/* Full Width Image */}
                <div className="blog-image-container">
                  <img
                    src={blog.image_url}
                    alt={blog.title}
                    className="blog-image"
                  />
                  {/* <div className="read-overlay">READ MORE</div> */}
                </div>

                {/* Blog Description/Excerpt */}
                <div className="blog-content">
                  <p className="blog-excerpt">
                    {blog.meta_description || blog.content?.substring(0, 300) || 
                      "Style Like a Star: Celebrity-Inspired Men's Wedding Outfits Looking sharp at a wedding isn't just about wearing something formal - it's about wearing something memorable. Today's most stylish celebrities have set new trends in wedding fashion, mixing classic elegance with modern flair. Whether you're the groom, the best man, or..."}
                  </p>

                  {/* READ MORE button at bottom */}
                  <Link href={`/blogs/${blog.id}`} className="read-more-btn">
                    READ MORE <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .blog-page {
          width: 100%;
          background: #f8fafc;
          min-height: 100vh;
        }

        /* ---------------- BANNER ---------------- */
        .banner {
          width: 100%;
          padding: 60px 20px;
          background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
            url("/banner-blog.jpg") center/cover no-repeat;
          color: #fff;
          text-align: center;
          margin-bottom: 50px;
        }
        
        .banner h1 {
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 15px;
          font-family: 'Montserrat', sans-serif;
        }
        
        .banner p {
          font-size: 18px;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
          font-weight: 300;
        }

        /* ---------------- BLOG CONTAINER ---------------- */
        .blog-container {
          max-width: 80%;
          margin: 0 auto 80px;
          padding: 0 20px;
        }

        /* ---------------- BLOG CARD ---------------- */
        .blog-card {
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          margin-bottom: 50px;
          border: 1px solid #e5e7eb;
          transition: transform 0.3s ease;
        }

        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        }

        /* ---------------- BLOG HEADER ---------------- */
        .blog-header {
          padding: 30px 30px 20px;
        }

        /* ---------------- BLOG TITLE ---------------- */
        .blog-title {
          font-size: 28px;
          font-weight: 700;
          margin: 0 0 15px 0;
          color: #1f2937;
          line-height: 1.3;
          font-family: 'Montserrat', sans-serif;
        }

        /* ---------------- BLOG META ---------------- */
        .blog-meta {
          display: flex;
          gap: 25px;
          align-items: center;
          margin-bottom: 10px;
          font-size: 14px;
          color: #6b7280;
        }

        .blog-author, .blog-date {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .blog-author i, .blog-date i {
          color: #4caf50;
          font-size: 13px;
        }

        .blog-author {
          font-weight: 600;
          color: #374151;
        }

        .blog-date {
          color: #6b7280;
        }

        /* ---------------- BLOG IMAGE ---------------- */
        .blog-image-container {
          position: relative;
          width: 100%;
          height: 400px;
          overflow: hidden;
        }

        .blog-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .blog-card:hover .blog-image {
          transform: scale(1.03);
        }

        .read-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.85);
          color: white;
          padding: 12px 0;
          text-align: center;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        /* ---------------- BLOG CONTENT ---------------- */
        .blog-content {
          padding: 30px;
          display: flex;
          flex-direction: column;
        }

        /* ---------------- BLOG EXCERPT ---------------- */
        .blog-excerpt {
          font-size: 16px;
          color: #4b5563;
          line-height: 1.7;
          margin: 0 0 25px 0;
          font-family: 'Inter', sans-serif;
        }

        /* ---------------- READ MORE BUTTON ---------------- */
        .read-more-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px 32px;
          background: #4caf50;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
          width: fit-content;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-family: 'Montserrat', sans-serif;
        }

        .read-more-btn:hover {
          background: #3d8b40;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
        }

        .read-more-btn i {
          font-size: 12px;
          transition: transform 0.3s ease;
        }

        .read-more-btn:hover i {
          transform: translateX(4px);
        }

        /* ---------------- LOADING STATE ---------------- */
        .loading-state {
          text-align: center;
          padding: 80px 20px;
        }

        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 3px solid #f3f3f3;
          border-top: 3px solid #4caf50;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 20px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .loading-state p {
          color: #666;
          font-size: 16px;
        }

        /* ---------------- EMPTY STATE ---------------- */
        .empty-state {
          text-align: center;
          padding: 60px 20px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          border: 1px solid #e5e7eb;
        }

        .empty-state p {
          color: #666;
          font-size: 16px;
        }

        /* ---------------- RESPONSIVE DESIGN ---------------- */
        @media (max-width: 768px) {
          .blog-container {
            padding: 0 15px;
          }

          .blog-card {
            margin-bottom: 40px;
          }

          .blog-header {
            padding: 25px 25px 15px;
          }

          .blog-title {
            font-size: 24px;
          }

          .blog-image-container {
            height: 300px;
          }

          .blog-content {
            padding: 25px;
          }

          .blog-excerpt {
            font-size: 15px;
          }

          .banner {
            padding: 50px 20px;
            margin-bottom: 40px;
          }

          .banner h1 {
            font-size: 36px;
          }

          .banner p {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .blog-header {
            padding: 20px 20px 15px;
          }

          .blog-title {
            font-size: 22px;
          }

          .blog-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }

          .blog-image-container {
            height: 250px;
          }

          .blog-content {
            padding: 20px;
          }

          .read-more-btn {
            width: 100%;
            justify-content: center;
          }

          .banner h1 {
            font-size: 32px;
          }
        }

        @media (max-width: 360px) {
          .blog-title {
            font-size: 20px;
          }

          .blog-image-container {
            height: 200px;
          }

          .blog-excerpt {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
}