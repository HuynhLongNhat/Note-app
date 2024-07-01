import { createContext, useEffect, useState } from "react"
import { getAuth } from "firebase/auth"
const AuthContext = createContext()

const AuthProvider = (children) => {
    const [user, setUser] = useState({})

    const auth = getAuth();

    useEffect(() => {
        const unsubcribed = auth.onIdTokenChanged(() => {

        })
        return () => {
            unsubcribed()
        }
    }, [])
    return (
        <div>
            <AuthContext.Provider value={{ user, setUser }}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider
