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

    const router = createBrowserRouter([
        {
            path: "/",
            element:  <Home />,
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
     /*   <AuthContext.Provider >*/
        <div>
            <Header/>
            <RouterProvider router={router} />
</div>
            /*</AuthContext.Provider>*/
    );
}

export default App;
