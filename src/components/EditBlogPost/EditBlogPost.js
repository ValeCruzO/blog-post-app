import React, { useState, useContext, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';
import './EditBlogPost.scss';

export const EditBlogPost = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  const { blogs, editBlog } = useContext(GlobalContext);
  const [selectedBlog, setSelectedBlog] = useState({
    id: null,
    title: '',
    categories: '',
    content: '',
  });

  useEffect(() => {
    const blogId = parseInt(id);
    const blogToEdit = blogs.find(blog => blog.id === blogId);
    if (blogToEdit) {
      setSelectedBlog(blogToEdit);
    }
  }, [id, blogs]);

  const handleOnChange = (userKey, newValue) => {
    setSelectedBlog({ ...selectedBlog, [userKey]: newValue });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    editBlog(selectedBlog);
    navigate("/");
  };

  if (!selectedBlog || !selectedBlog.id) {
    return <div>Invalid Blog ID.</div>;
  }

  return (
    <div className="edit-blog-post-container">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title" className="form-label">Title of the post</label>
          <input
            id="title"
            className="form-input"
            value={selectedBlog.title}
            onChange={(e) => handleOnChange('title', e.target.value)}
            type="text"
            placeholder="Enter title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="categories" className="form-label">Categories</label>
          <input
            id="categories"
            className="form-input"
            value={selectedBlog.categories}
            onChange={(e) => handleOnChange('categories', e.target.value)}
            type="text"
            placeholder="Enter categories"
          />
        </div>
        <div className="form-group">
          <label htmlFor="content" className="form-label">Content</label>
          <textarea
            id="content"
            className="form-input"
            value={selectedBlog.content}
            onChange={(e) => handleOnChange('content', e.target.value)}
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
  );
};
