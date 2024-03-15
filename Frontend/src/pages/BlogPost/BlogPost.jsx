import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { useParams } from 'react-router-dom'
import axios from 'axios'



const BlogPost = () => {
    const { id } = useParams()
    const [blog, setBlog] = useState({})
    const getBlog = async (id) => {
        try {
            let { data } = await axios.post("http://localhost:4000/api/blog/all_blogs");
            let blogArr = data.allBlogs
            blogArr.map((post) => {
                if (post._id == id) {
                    setBlog(post)
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBlog(id);
    }, [])

    return (
        <>
            <Navbar />

            <div div className="max-w-[60%] mx-auto my-8 p-6 bg-white rounded-md shadow-md">
                <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
                <div className="flex items-center mb-4">
                    <img
                        src="/selfimg.jpeg"
                        alt="Author"
                        className="w-10 h-10 rounded-full mr-2"
                    />
                    <span className="text-gray-700">Shivam Kushwaha</span>
                </div>
                <img
                    src={blog.image}
                    alt="Blog Post"
                    className="w-full h-96 mb-16"
                />

                <p className="text-gray-800">
                    {blog.description}
                </p>
            </div>
            <Footer />
        </>
    )
}

export default BlogPost

