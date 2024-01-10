import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; 
import { GlobalContext } from '../../context/GlobalState';
import './BlogPost.scss';

export const BlogPost = () => {
  const { blogs, deleteBlog, likeBlogPost } = useContext(GlobalContext);

  const handleLike = (id) => {
    likeBlogPost(id);
  };

  return (
    <div className="blog-table-container">
      <table className="blog-table">
        {blogs.map((blog) => (
          <tr className="blog-row" key={blog.id}>
            <td>{blog.title}</td>
            <td>{blog.categories}</td>
            <td>{blog.content}</td>
            <td className="action-buttons">
              <button onClick={() => handleLike(blog.id)} className="like-btn">
                Like {blog.likes}
              </button>
              <Link to={`/edit/${blog.id}`} title="Edit Post" >
                <button className="edit-btn">
                  Edit
                  {<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>}
                </button>
              </Link>
              <button onClick={() => deleteBlog(blog.id)} title="Delete Blog" className="delete-btn">
                Delete
                {<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>}
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
