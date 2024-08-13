import React from 'react'
import { useState, useEffect } from 'react'
import Login from './Login' // Import the Login component
import Logout from './Logout' // Import the Logout component
import { useAuth } from '../context/AuthProvider.jsx' // Import authentication context

function Navbar() {

    const [authUser, setAuthUser] = useAuth(); // Access the authenticated user and setter from context

    // State to manage the theme (light or dark)
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light" // Get theme from local storage or default to light
    )
    const element = document.documentElement // Reference to the root element

    // Effect to apply theme changes
    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark") // Add dark class to root element
            localStorage.setItem("theme", "dark") // Save theme in local storage
            document.body.classList.add("dark") // Add dark class to body
        }
        else {
            element.classList.remove("dark") // Remove dark class from root element
            localStorage.setItem("theme", "light") // Save theme in local storage
            document.body.classList.remove("dark") // Remove dark class from body
        }
    }, [theme]) // Dependency on theme state

    // State to manage sticky navbar
    const [sticky, setSticky] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setSticky(true) // Set sticky to true if scrolled
            }
            else {
                setSticky(false) // Set sticky to false if at the top
            }
        }
        window.addEventListener("scroll", handleScroll) // Add scroll event listener
        return () => {
            window.removeEventListener("scroll", handleScroll) // Cleanup event listener on component unmount
        }
    }, []) // Empty dependency array to run once on mount

    // Navigation list
    const NavList = (
        <>
            <li><a href="/">Home</a></li>
            <li><a href="/course">Course</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="">About</a></li>
        </>
    )

    return (
        <>
            {/* Navbar container */}
            <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white fixed top-0 left-0 right-0 ${sticky ? "sticky shadow-md bg-base-200 dark:bg-slate-600 dark:text-white duration-300 transition-all ease-in-out" : ""}`}>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                {/* Mobile menu button */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {NavList} {/* Render navigation list */}
                            </ul>
                        </div>
                        <a className="text-2xl font-bold cursor-pointer">BookStore</a> {/* Navbar brand */}
                    </div>
                    <div className="navbar-end space-x-3">
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 text-lg">
                                {NavList} {/* Render navigation list for large screens */}
                            </ul>
                        </div>
                        <div className="hidden md:block">
                            <label className="input input-bordered flex items-center gap-2">
                                {/* Search input */}
                                <input type="text" className="grow" placeholder="Search" />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd" />
                                </svg>
                            </label>
                        </div>
                        <label className="flex cursor-pointer gap-2">
                            {/* Theme toggle button */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                                <circle cx="12" cy="12" r="5" />
                                <path
                                    d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                            </svg>
                            <input type="checkbox" value="synthwave" className="toggle theme-controller" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        </label>
                        {
                            authUser ? (
                                <Logout /> /* Show Logout button if user is authenticated */
                            ) : (
                                <div className="">
                                    <a className="btn bg-black text-white rounded-full px-7 text-[15px] duration-300 hover:px-9 hover:bg-" onClick={() => document.getElementById("my_modal_3").showModal()}>Login</a>
                                    <Login /> {/* Show Login component if user is not authenticated */}
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
