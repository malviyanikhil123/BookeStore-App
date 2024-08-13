import React, { createContext, useContext, useState } from 'react'

// Create a Context for authentication
export const AuthContext = createContext()

// Provider component that wraps the application and provides authentication state
export default function AuthProvider({ children }) {
    // Initialize the authentication user from localStorage
    const initialAuthUser = localStorage.getItem("User")

    // State to hold the authentication user, initialized from localStorage if available
    const [authUser, setAuthUser] = useState(
        initialAuthUser ? JSON.parse(initialAuthUser) : undefined
    )

    return (
        // Provide the authentication user and setter function to the component tree
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    )
}

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext)
