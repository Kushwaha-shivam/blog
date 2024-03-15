import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound/NotFound.jsx'
import Login from './pages/Login/Login.jsx'
import SignUp from './pages/SignUp/SignUp.jsx'
import AllBlogs from './pages/AllBlogs/AllBlogs.jsx'
import BlogPost from './pages/BlogPost/BlogPost.jsx'
import CreateBlogPost from './pages/Admin/CreateBlogPost.jsx'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllBlogs />} />
        <Route path={`/blogpost/:id`} element={<BlogPost />} />
        <Route path="/admin/create-blog-post" element={<CreateBlogPost />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App

