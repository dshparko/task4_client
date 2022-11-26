import './App.css';
import Login from "./login/Login";
import Register from "./register/Register";
import Header from "./header/Header";
import Home from "./home/Home";
import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "./context/authContext";
function App() {
    const { currentUser } = useContext(AuthContext);
    const ProtectedRoute = ({ children }) => {
        if (!currentUser) {
            return <Navigate to="/login" />;
        }

        return children;
    };

    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <ProtectedRoute>
                    <Login />
                </ProtectedRoute>
            ),
            children: [
                {
                    path: "/",
                    element: <Home />,
                }
            ],
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/register",
            element: <Register />,
        },
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
