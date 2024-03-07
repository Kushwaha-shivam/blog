import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound/NotFound.jsx'
import Login from './pages/Login/Login.jsx'
import SignUp from './pages/SignUp/SignUp.jsx'
import MyBlogs from './pages/MyBlogs/MyBlogs.jsx'
import AllBlogs from './pages/AllBlogs/AllBlogs.jsx'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllBlogs />} />
        <Route path="/all-blogs" element={<AllBlogs />} />
        <Route path="/my-blogs" element={<MyBlogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App

