import axios from 'axios'
import React, { useState } from 'react'


const CreateBlogPost = () => {
    // states 
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            // Handle form submission, || send data to backend
            await axios.post("http://localhost:4000/api/blog/add_blog", { title, image, description })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-20 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Create A Blog Post
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                            Title
                        </label>
                        <div className="mt-2">
                            <input
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                name="title"
                                type="text"
                                required
                                className="block w-full rounded-md border-0 py-1.5
                            pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className='mb-10'>
                        <div className="flex items-center justify-between">
                            <label htmlFor="image-url" className="block text-sm font-medium leading-6 text-gray-900">
                                Image URL
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="image-url"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                name="image-url"
                                type="text"
                                required
                                className="block w-full rounded-md border-0 py-1.5 
                            pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                            />
                        </div>

                        <div className="mt-8">
                            <label htmlFor="description" className="block text-gray-900 font-semibold mb-2">description</label>
                            <textarea
                                id="description"
                                name="description"
                                onChange={(e) => setDescription(e.target.value)}
                                value={description}
                                required
                                className="w-full px-3 py-2  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600"
                            />
                        </div>

                    </div>

                    <div>
                        <button
                            type="submit"

                            className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm bg-purple-600 hover:bg-purple-700 "
                        >
                            Create Post
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default CreateBlogPost
