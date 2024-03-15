import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ title, description, imageUrl, id }) => {
    const slicedTitle = title.slice(0, 50)
    const slicedDesc = description.slice(0, 150) + "..Read More"
    return (
        <div className="m-auto overflow-hidden rounded-md shadow-lg cursor-pointer h-90 w-60 md:w-80">
            <Link to={`/blogpost/${id}`} className="block w-full h-full">
                <img alt="blog photo" src={imageUrl} className="object-cover w-full max-h-40" />
                <div className="w-full p-4 bg-white dark:bg-gray-800">
                    <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                        {slicedTitle}
                    </p>
                    <p className="font-light text-gray-500 dark:text-gray-300 text-md">
                        {slicedDesc}
                    </p>
                    <div className="flex items-center mt-4">
                        <a href="#" className="relative block">
                            <img alt="profile" src="/selfimg.jpeg" className="mx-auto object-cover rounded-full h-10 w-10 " />
                        </a>
                        <div className="flex flex-col justify-between ml-4 text-sm">
                            <p className="text-gray-400 dark:text-white">
                                Created By :-
                            </p>
                            <p className=" text-gray-800 dark:text-gray-300">
                                Shivam Kushwaha
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div >
    )
}

export default BlogCard
