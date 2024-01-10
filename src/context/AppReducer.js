export default function appReducer(state, action) {
    switch (action.type) {
      case "NEW_BLOG_POST":
        return {
          ...state,
          blogs: [...state.blogs, action.payload],
        };
      case "EDIT_BLOG_POST":
        return {
          ...state,
          blogs: state.blogs.map(blog =>
            blog.id === action.payload.id ? action.payload : blog
          ),
        };
      case "DELETE_BLOG_POST":
        return {
          ...state,
          blogs: state.blogs.filter(blog => blog.id !== action.payload),
        };
      case "LIKE_BLOG_POST":
        return {
          ...state,
          blogs: state.blogs.map((blog) => {                
            if (blog.id === action.payload) {
              return { ...blog, likes: (blog.likes || 0) + 1 };
            }
        return blog;
            }),
        };
      default:
        return state;
    }
  };