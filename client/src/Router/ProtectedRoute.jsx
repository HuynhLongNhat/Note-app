/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Outlet, Navigate } from 'react-router-dom';
export default function ProtectedRoute({ children }) {
    console.log({ accessToken: localStorage.getItem('accessToken') });
    if (!localStorage.getItem('accessToken')) {
        return <Navigate to='/login' />;
    }

    return <Outlet />;
}