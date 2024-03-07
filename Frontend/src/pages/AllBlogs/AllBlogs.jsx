import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import BlogCard from '../../components/BlogCard/BlogCard'
import axios from 'axios'

const AllBlogs = () => {
    // state for holding the all blogs 
    const [blogs, setBlogs] = useState();

    //function for retreiving the all blogs 
    const getAllBlog = async () => {
        try {
            let { data } = await axios.post("http://localhost:4000/api/blog/all_blogs");
            if (data) {
                setBlogs(data.allBlogs)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllBlog();
    }, [])
    return (
        <>
            <Navbar />
            <div className="w-full p-12 bg-white">
                <div className="flex sm:flex-col sm:items-center md:flex-row md:justify-between   mb-16 header">
                    <div className="title">
                        <p className="mb-4 text-4xl font-bold text-gray-800">
                            Latest articles
                        </p>
                        <p className="text-2xl font-light text-gray-500">
                            All article created by Users are Here -
                        </p>
                    </div>
                    <div className="text-end">
                        <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                            <div className=" relative ">
                                <input type="text" id="&quot;form-subscribe-Search" className=" rounded-sm border-transparent flex-1 appearance-none border border-purple-500 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Enter a title" />
                            </div>
                            <button className="flex-shrink-0 px-8 py-2 text-base font-semibold text-white bg-purple-600 rounded-sm shadow-lg hover:bg-purple-700 focus:outline-none" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
                    {
                        blogs && blogs.map((item) => (
                            <BlogCard key={item._id} title={item.title} description={item.description} imageUrl={item.image} userName={item.user} />
                        ))
                    }
                </div>
            </div>
            <Footer />

        </>
    )
}

export default AllBlogs