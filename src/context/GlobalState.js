import React, { createContext, useReducer } from 'react';
import appReducer from './AppReducer';

const initialState = {
  blogs: [
    {
      id: 1,
      title: '81st Golden Globe Winners; Sort Of Returns for Final Season',
      categories: 'Awards, Television Series',
      content: 'The 81st Golden Globe Awards celebrated the best in film and American television of 2023. Succession and The Bear were the big winners in the television category, each securing three awards.',
      likes: 0
    }
  ]
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function newBlogPost(blog) {
    dispatch({
      type: "NEW_BLOG_POST",
      payload: blog
    });
  }

  function editBlog(blog) {
    dispatch({
      type: "EDIT_BLOG_POST",
      payload: blog
    });
  }

  function deleteBlog(id) {
    dispatch({
      type: "DELETE_BLOG_POST",
      payload: id
    });
  }

  function likeBlogPost(id) {
    dispatch({
      type: "LIKE_BLOG_POST",
      payload: id
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        blogs: state.blogs,
        newBlogPost,
        editBlog,
        deleteBlog,
        likeBlogPost
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};