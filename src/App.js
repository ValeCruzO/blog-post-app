import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';
import { BlogPost } from './components/BlogPost/BlogPost';
import { NewBlogPost } from './components/NewBlogPost/NewBlogPost';
import { EditBlogPost } from './components/EditBlogPost/EditBlogPost';
import { Home } from './components/Home/Home';
import { Heading } from './components/Heading/Heading';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className='App'>
          <Heading />
          <Routes> {}
            <Route path="/" element={<Home />} /> {}
            <Route path="/add" element={<NewBlogPost />} /> {}
            <Route path="/edit/:id" element={<EditBlogPost />} /> {}
          </Routes>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
