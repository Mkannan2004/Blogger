import React from "react";
import "../Blogger.css";

function Home() {
  const blogs = [
    {
      id: 1,
      title: "How to Learn React in 2026",
      excerpt: "A complete guide to mastering React, hooks, and modern web development...",
      author: "Kannan Murugesan",
      date: "May 28, 2026",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&q=80"
    },
    {
      id: 2,
      title: "Top 5 UI Trends for Premium Websites",
      excerpt: "Discover the latest design trends including glassmorphism and minimal gradients...",
      author: "Jane Smith",
      date: "May 25, 2026",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80"
    }
  ];

  return (
    <div className="page-wrapper">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to <span className="gradient-text">MyBlogger</span></h1>
          <p>Read, write, and share your colorful ideas with the world.</p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Latest Articles</h2>
        <div className="colorful-grid">
          {blogs.map((blog) => (
            <div className="colorful-card" key={blog.id}>
              <div className="card-image-wrapper">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="card-body">
                <span className="card-meta">{blog.date} • By {blog.author}</span>
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
                <button className="text-link-btn">Read More &rarr;</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;