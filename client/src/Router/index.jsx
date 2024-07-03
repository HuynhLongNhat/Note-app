import { Outlet, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import AuthProvider from "../Context/AuthProvider";
import ProtectedRoute from "./ProtectedRoute";
import ErrorPage from "../pages/ErrorPage";
import { NoteList } from "../Components/NoteList";
import { Note } from "../Components/Note";
import { addNewNote, noteLoader, notesLoader, updateNote } from '../utils/noteUtils';
const AuthLayout = () => {
    return (
        <AuthProvider>
            <Outlet />
        </AuthProvider>
    )
}
// eslint-disable-next-line react-refresh/only-export-components
export default createBrowserRouter([
    {
        element: <AuthLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                element: <Login />,
                path: "/login"
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        element: <Home />,
                        path: "/",
                        children: [
                            {
                                element: <NoteList />,
                                path: `folders/:folderId`,
                                action: addNewNote,
                                loader: notesLoader,
                                children: [
                                    {
                                        element: <Note />,
                                        path: `note/:noteId`,
                                        action: updateNote,
                                        loader: noteLoader,
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },

        ]
    }
])