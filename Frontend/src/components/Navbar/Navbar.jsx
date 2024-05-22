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
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 sm:flex-item-center sm:justify-between">
                    <Link to="/" className="flex items-center space-x-3">
                        <img src="/codespaceLogo.png" className="h-8 rounded-full" alt="Flowbite Logo" />
                        <span className="self-center text-3xl font-semibold whitespace-nowrap text-purple-700">CodeSpace</span>
                    </Link>

                    <div className="flex space-x-3 sm:mt-4 ">
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

