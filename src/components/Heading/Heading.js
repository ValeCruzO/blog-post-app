import React from "react";
import { Link } from "react-router-dom";
import "./Heading.scss";
import { NewBlogPost } from "../NewBlogPost/NewBlogPost";

export const Heading = () => {
  return (
    <div className="heading-container">
      <div className="heading-title">
        <Link to="/">
        <button className="blog-btn">
            <span>Blog Post</span>
          </button>
        </Link>
      </div>
      <div className="heading-action">
        <Link to="/add">
          <button className="new-btn">
            <span>New Post</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
