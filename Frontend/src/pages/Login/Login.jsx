import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { authActions } from '../../Redux/Store';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // react toast for success 
    const success = () => toast.success("Login Successfully completed", {
        position: "top-center",
        pauseOnHover: true,
        theme: "light",
        autoClose: 1500,
    }
    );
    // react toast for error 
    const error = () => toast.error("Some Error Occured", {
        position: "top-center",
        pauseOnHover: true,
        theme: "light",
        autoClose: 1500,
    }
    );


    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:4000/api/user/login", { email, password });
            setEmail("");
            setPassword("");
            success();
            dispatch(authActions.login());
            setTimeout(() => {
                navigate("/all-blogs");
            }, 2000);
        } catch (err) {
            console.log(err);
            error();
        }
    }

    return (
        <>
            <ToastContainer
                position="top-center"
            />
            <Navbar />

            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-20 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto rounded-full"
                        src="/codespaceLogo.png"
                        alt="CodeSpace"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={submitHandler}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5
                                    pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 
                                    pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                                />
                            </div>

                            <div className="text-sm mt-3">
                                <a href="#" className="font-semibold text-purple-600 hover:text-purple-700">
                                    Forgot password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm bg-purple-600 hover:bg-purple-700 "
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <Link to="/signup" className="font-semibold leading-6 text-purple-600 hover:text-purple-700">
                            Signup to new account
                        </Link>
                    </p>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Login
