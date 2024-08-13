import React from 'react'
import { useAuth } from '../context/AuthProvider' // Import the authentication context
import toast from 'react-hot-toast'; // Import the toast notification library

function Logout() {

    const [authUser, setAuthUser] = useAuth(); // Access the authenticated user and setter from context

    const handleLogout = () => {
        try {
            // Update the authentication context to remove the user
            setAuthUser({
                ...authUser,
                user: null // Set user to null to signify logout
            })
            localStorage.removeItem("User") // Remove user data from local storage
            toast.success("Logout successfully") // Show success notification
            setTimeout(() => {
                window.location.reload() // Reload the page after logout
            }, 1000); // Delay before reloading the page
        } catch (error) {
            toast.error("Error : " + error.message) // Show error notification if logout fails
            setTimeout(() => {
                // Additional error handling can be added here if needed
            }, 2000); // Delay for error handling
        }
    }

    return (
        <div>
            {/* Logout button that triggers the handleLogout function */}
            <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Logout
