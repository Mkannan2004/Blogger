import React, { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import "../Blogger.css";

function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mediaFile, setMediaFile] = useState(null); 
  const navigate = useNavigate(); 

  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link', 'image', 'video'], 
      ['clean']
    ],
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMediaFile(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      id: Date.now(), 
      title: title,
      content: content,
      media: mediaFile, 
      date: new Date().toLocaleDateString() 
    };

    const existingBlogs = JSON.parse(localStorage.getItem("myBlogs")) || [];
    existingBlogs.push(newBlog);
    
    try {
      localStorage.setItem("myBlogs", JSON.stringify(existingBlogs));
      alert("Blog successfully published! 🎉");
      navigate("/articles");
    } catch (error) {
      alert("Storage Full! Local storage can only hold 5MB.");
      console.error("Storage error:", error);
    }
  };

  return (
    <div className="page-wrapper center-content">
      <div className="form-container glass-card">
        <h2 className="form-title">Write a <span className="gradient-text">New Article</span></h2>
        
        <form onSubmit={handleSubmit} className="custom-form">
          <div className="input-group">
            <label>Blog Title</label>
            <input 
              type="text" 
              placeholder="Enter an engaging title..." 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required 
            />
          </div>

          <div className="input-group">
            <label>Cover Media</label>
            <div className="file-upload-wrapper">
              <input 
                type="file" 
                accept="image/*, video/*, .pdf, .doc, .docx" 
                onChange={handleFileChange}
                className="file-input"
              />
            </div>
            {mediaFile && <p className="success-text">✅ File attached successfully!</p>}
          </div>

          <div className="input-group">
            <label>Content</label>
            <div className="editor-wrapper">
              <ReactQuill 
                theme="snow" 
                modules={quillModules} 
                value={content} 
                onChange={setContent} 
                placeholder="Write your amazing story here..."
              />
            </div>
          </div>

          <button type="submit" className="primary-btn">Publish Blog</button>
        </form>
      </div>
    </div>
  );
}

export default Create;