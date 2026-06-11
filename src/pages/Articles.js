import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../Blogger.css";

function Articles() {
const [blogs, setBlogs] = useState([]);
const [selectedBlog, setSelectedBlog] = useState(null);

const location = useLocation();

const queryParams = new URLSearchParams(location.search);
const searchKeyword = queryParams.get("search")?.toLowerCase() || "";

useEffect(() => {
const storedBlogs = JSON.parse(localStorage.getItem("myBlogs")) || [];
setBlogs([...storedBlogs].reverse());
}, []);

const filteredBlogs = blogs.filter(
(blog) =>
blog.title?.toLowerCase().includes(searchKeyword) ||
blog.content?.toLowerCase().includes(searchKeyword)
);

return ( <div className="page-wrapper"> <div className="content-section"> <h2 className="section-title">
{searchKeyword
? `Search Results for "${searchKeyword}"`
: "All Articles"} </h2>

```
    {filteredBlogs.length === 0 ? (
      <div className="empty-state">
        <p>
          {searchKeyword
            ? "No blogs found for this search. Try a different word!"
            : "No articles yet. Go write your first blog!"}
        </p>
      </div>
    ) : (
      <div className="colorful-grid">
        {filteredBlogs.map((blog) => (
          <div
            className="colorful-card"
            key={blog.id}
            onClick={() => setSelectedBlog(blog)}
          >
            {blog.media && (
              <div className="card-image-wrapper">
                <img src={blog.media} alt={blog.title} />
              </div>
            )}

            <div className="card-body">
              <h3>{blog.title}</h3>

              <span className="card-meta">
                Published on: {blog.date}
              </span>

              <div
                className="card-excerpt"
                dangerouslySetInnerHTML={{
                  __html:
                    blog.content.length > 150
                      ? blog.content.substring(0, 150) + "..."
                      : blog.content,
                }}
              />

              <button className="read-more-btn">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    )}

    {selectedBlog && (
      <div
        className="preview-overlay"
        onClick={() => setSelectedBlog(null)}
      >
        <div
          className="preview-modal"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="close-btn"
            onClick={() => setSelectedBlog(null)}
          >
            ✕
          </button>

          {selectedBlog.media && (
            <img
              src={selectedBlog.media}
              alt={selectedBlog.title}
              className="preview-image"
            />
          )}

          <h2>{selectedBlog.title}</h2>

          <p className="card-meta">
            Published on: {selectedBlog.date}
          </p>

          <div
            className="preview-content"
            dangerouslySetInnerHTML={{
              __html: selectedBlog.content,
            }}
          />
        </div>
      </div>
    )}
  </div>
</div>
);
}

export default Articles;
