import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';
import './NewBlogPost.scss';

export const NewBlogPost = () => {
  let navigate = useNavigate();
  const { newBlogPost, blogs } = useContext(GlobalContext);
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: blogs.length + 1,
      title,
      categories,
      content,
    };
    newBlogPost(newPost);
    navigate("/");
  };

  return (
    <React.Fragment>
      <div className="new-blog-post-container">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="title" className="form-label">Title of the post</label>
            <input
              id="title"
              className="form-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Enter title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="categories" className="form-label">Categories</label>
            <input
              id="categories"
              className="form-input"
              value={categories}
              onChange={(e) => setCategories(e.target.value)}
              type="text"
              placeholder="Enter categories"
            />
          </div>
          <div className="form-group">
            <label htmlFor="content" className="form-label">Content</label>
            <textarea
              id="content"
              className="form-input"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter content"
            />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
          <div className="cancel-link">
            <Link to="/">
            <button className="cancel-btn">Cancel</button>
            </Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};
