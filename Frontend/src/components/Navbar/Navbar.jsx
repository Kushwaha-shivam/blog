import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {

    // global states 
    const isLogin = useSelector(state => state.isLogin);



    // local states 


    return (
        <>
            <nav className="bg-white dark:bg-gray-900  w-full  border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center space-x-3">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">CodeSpace</span>
                    </Link>

                    <div className="items-center justify-between hidden w-full md:flex md:w-auto" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                {isLogin && <NavLink to="/" className={({ isActive }) =>
                                    `block py-2 px-3  rounded md:bg-transparent md:p-0 ${isActive ? "text-blue-600" : "text-gray-900"}`
                                } >Blogs</NavLink>}
                            </li>
                            <li>
                                {isLogin && <NavLink to="/my-blogs" className={({ isActive }) =>
                                    `block py-2 px-3 rounded md:hover:bg-transparent md:p-0 ${isActive ? "text-blue-600" : "text-gray-900"}`
                                }>My Blogs</NavLink>}
                            </li>
                        </ul>
                    </div>

                    <div className="flex space-x-3 ">
                        {!isLogin && <Link to="/login">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">Login</button>
                        </Link>}

                        {!isLogin && <Link to="/signup">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">Signup</button>
                        </Link>}

                        {isLogin && <Link to="/signup">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">Logout</button>
                        </Link>}

                    </div>
                </div>
            </nav>

        </>

    )
}

export default Navbar

