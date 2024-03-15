import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../../Redux/Store';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    // global states 
    const isLogin = useSelector(state => state.isLogin);

    const dispacth = useDispatch();
    const navigate = useNavigate();

    // handling logout functionality 
    const handleLogOut = () => {
        try {
            dispacth(authActions.logout());
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <nav className="bg-white dark:bg-gray-900  w-full  border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center space-x-3">
                        <img src="/codespaceLogo.png" className="h-8 rounded-full" alt="Flowbite Logo" />
                        <span className="self-center text-3xl font-semibold whitespace-nowrap text-purple-700">CodeSpace</span>
                    </Link>

                    {/* <div className="items-center justify-between hidden w-full md:flex md:w-auto" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                {isLogin && <NavLink to="/" className={({ isActive }) =>
                                    `block py-2 px-3  rounded md:bg-transparent md:p-0 ${isActive ? "text-purple-600" : "text-gray-900"}`
                                } >Home</NavLink>}
                            </li>
                            <li>
                                {isLogin && <NavLink to="/my-blogs" className={({ isActive }) =>
                                    `block py-2 px-3 rounded md:hover:bg-transparent md:p-0 ${isActive ? "text-purple-600" : "text-gray-900"}`
                                }>BlogPost</NavLink>}
                            </li>
                        </ul>
                    </div> */}

                    <div className="flex space-x-3 ">
                        {!isLogin && <Link to="/login">
                            <button type="button" className="text-white bg-purple-600 hover:bg-purple-700 font-medium rounded-sm text-sm px-6 py-2 shadow-lg text-center">Login</button>
                        </Link>}

                        {!isLogin && <Link to="/signup">
                            <button type="button" className="text-white bg-purple-600 hover:bg-purple-700 font-medium rounded-sm text-sm px-6 py-2 shadow-lg text-center">Signup</button>
                        </Link>}

                        {isLogin &&
                            <button onClick={handleLogOut} type="button" className="text-white bg-purple-600 hover:bg-purple-700  font-medium rounded-sm shadow-lg text-sm px-4 py-2 text-center">Logout</button>}

                    </div>
                </div>
            </nav >

        </>

    )
}

export default Navbar

