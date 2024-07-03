/* eslint-disable no-unused-vars */

import { Button, Typography } from "@mui/material"
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { useContext } from "react"
import { AuthContext } from "../Context/AuthProvider"
import { Navigate } from 'react-router-dom';
import { graphQLRequest } from '../utils/request';
const Login = () => {
    const auth = getAuth()
    const { user } = useContext(AuthContext)

    const handleLoginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();

        const {
            user: { uid, displayName },
        } = await signInWithPopup(auth, provider);

        const { data } = await graphQLRequest({
            query: `mutation register($uid: String!, $name: String!) {
          register(uid: $uid, name: $name) {
            uid
            name
          }
        }`,
            variables: {
                uid,
                name: displayName,
            },
        });
        console.log('register', { data });
    };

    if (localStorage.getItem('accessToken')) {
        return <Navigate to="/" />
    }
    return (
        <div>
            <Typography variant="h5" sx={{ margin: '10px' }}>Welcome to Note app</Typography>
            <Button variant="outlined" onClick={handleLoginWithGoogle}>Login with Google</Button>
        </div>
    )
}

export default Login
