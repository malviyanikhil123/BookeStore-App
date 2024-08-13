import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Login from './Login';

// The Signup component handles user signup with form validation using react-hook-form.
function Signup() {

    // Destructure methods from useForm hook for handling form state and validation
    const {
        register, // Registers input fields for validation
        handleSubmit, // Handles form submission
        formState: { errors }, // Object containing form errors
    } = useForm();

    // Function to handle form submission, logs form data to the console
    const onSubmit = (data) => console.log(data);

    return (
        <div className='flex h-screen items-center justify-center'>
            {/* Modal container for the signup form */}
            <div id="my_modal_2" >
                <div className="m-8 modal-box">
                    {/* Form element with dialog method and submit handler */}
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        {/* Close button leading back to the homepage */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                        {/* Heading for the signup form */}
                        <h3 className="font-bold text-3xl mb-5 underline">Contact Us</h3>
                        
                        {/* Input field for the name */}
                        <div className="">
                            <label className="input input-bordered flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                </svg>
                                {/* Register name input field with validation */}
                                <input type="text" className="grow" placeholder="Name" {...register("name", { required: true })} />
                                {/* Error message if name field is not filled */}
                                {errors.name && (<span className='text-sm text-red-500'>This field is required</span>)}
                            </label>

                            {/* Input field for the email */}
                            <label className="input input-bordered flex items-center gap-2 my-8">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path
                                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                {/* Register email input field with validation */}
                                <input type="email" className="grow" placeholder="Email" {...register("email", { required: true })} />
                                {/* Error message if email field is not filled */}
                                {errors.email && (<span className='text-sm text-red-500'>This field is required</span>)}
                            </label>

                            {/* Textarea for the message input */}
                            <label className=" flex items-center gap-2 mt-8 mb-3 text-xl">Message</label>
                            <textarea id="message" name="Message" rows="4" cols="50">
                            </textarea>
                        </div>
                        {/* Submit button */}
                        <div className="flex items-center justify-around">
                            <button className="btn btn-active btn-neutral hover:bg-slate-900 mt-5 rounded-lg">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
