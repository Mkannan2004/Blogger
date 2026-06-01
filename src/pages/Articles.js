import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; 
import "../Blogger.css";

function Articles() {
  const [blogs, setBlogs] = useState([]);
  const location = useLocation(); 

  const queryParams = new URLSearchParams(location.search);
  const searchKeyword = queryParams.get("search")?.toLowerCase() || ""; 

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("myBlogs")) || [];
    setBlogs(storedBlogs.reverse()); 
  }, []);

  const filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(searchKeyword) || 
    blog.content.toLowerCase().includes(searchKeyword)
  );

  return (
    <div className="page-wrapper">
      <div className="content-section">
        <h2 className="section-title">
          {searchKeyword ? `Search Results for "${searchKeyword}"` : "All Articles"}
        </h2>
        
        {filteredBlogs.length === 0 ? (
          <div className="empty-state">
            <p>{searchKeyword ? "No blogs found for this search. Try a different word!" : "No articles yet. Go write your first blog!"}</p>
          </div>
        ) : (
          <div className="colorful-grid">
            {filteredBlogs.map((blog) => (
              <div className="colorful-card" key={blog.id}>
                {blog.media && (
                  <div className="card-image-wrapper">
                    <img src={blog.media} alt="Blog Cover" />
                  </div>
                )}
                <div className="card-body">
                  <h3>{blog.title}</h3>
                  <span className="card-meta">Published on: {blog.date}</span>
                  <div 
                    className="card-excerpt"
                    dangerouslySetInnerHTML={{ __html: blog.content.substring(0, 150) + "..." }} 
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Articles;