import React from 'react'

const BlogCard = (props) => {
    return (
        <div className="m-auto overflow-hidden rounded-md shadow-lg cursor-pointer h-90 w-60 md:w-80">
            <a href="#" className="block w-full h-full">
                <img alt="blog photo" src={props.imageUrl} className="object-cover w-full max-h-40" />
                <div className="w-full p-4 bg-white dark:bg-gray-800">
                    <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                        {props.title}
                    </p>
                    <p className="font-light text-gray-500 dark:text-gray-300 text-md">
                        {props.description}
                    </p>
                    <div className="flex items-center mt-4">
                        <a href="#" className="relative block">
                            <img alt="profile" src="/images/person/6.jpg" className="mx-auto object-cover rounded-full h-10 w-10 " />
                        </a>
                        <div className="flex flex-col justify-between ml-4 text-sm">
                            <p className="text-gray-400 dark:text-white">
                                Created By :-
                            </p>
                            <p className=" text-gray-800 dark:text-gray-300">
                                {props.userName}
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default BlogCard
