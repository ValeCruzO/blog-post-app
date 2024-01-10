import React from "react";
import { BlogPost } from "../BlogPost/BlogPost";
import "./Home.scss";
import { Heading } from "../Heading/Heading";

export const Home = () => {
  return (
    <React.Fragment>
      <div className="home-container">
        <BlogPost/>
      </div>
    </React.Fragment>
  );
};
