import axios from 'axios'
import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';


const CreateBlogPost = () => {
    const editor = useRef(null)
    // states 
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            // Handle form submission, || send data to backend
            await axios.post("http://localhost:4000/api/blog/add_blog", { title, image, description })
            setTitle("")
            setImage("")
            setDescription("")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex min-h-full w-[100vw] flex-1 flex-col justify-center px-6 py-20 ">
            <div className="mx-auto w-full ">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Create A Blog Post
                </h2>
            </div>

            <div className="mt-10 mx-auto w-full max-w-sm">
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
                    </div>

                    <JoditEditor
                        ref={editor}
                        value={description}
                        config={{
                            enter: 'p', // Use <p> tags for line breaks
                        }}
                        onChange={(newcontent) => setDescription(newcontent)}

                    />

                    {/* <div dangerouslySetInnerHTML={{ __html: description }} /> */}
                    <div>{description}</div>
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
