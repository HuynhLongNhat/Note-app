
import { Button, Typography } from "@mui/material"
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { useContext } from "react"
import { AuthContext } from "../Context/AuthProvider"
import { useNavigate } from "react-router-dom"
const Login = () => {
    const auth = getAuth()
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()


    const handleLoginWithGoogle = async () => {


        const provider = new GoogleAuthProvider();
        const res = await signInWithPopup(auth, provider)
        console.log(res)
        if (user?.uid) {
            navigate('/');
            return;
        }

    }
    return (
        <div>
            <Typography variant="h5" sx={{ margin: '10px' }}>Welcome to Note app</Typography>
            <Button variant="outlined" onClick={handleLoginWithGoogle}>Login with Google</Button>
        </div>
    )
}

export default Login
