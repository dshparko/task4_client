import './App.css';
import Login from "./login/Login";
import Register from "./register/Register";
import Header from "./header/Header";
import Home from "./home/Home";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "./context/authContext";
import axios from "axios";
import useAuthContext from "./useAuthContext";

function App() {
    const {setUser, authUnsuccessful, authDone} = useAuthContext()

    useEffect(() => {
        handleAuth()
    }, [])

    const handleAuth = async () => {
        try {
            const res = await axios.get(`http://localhost:8000/server/auth/check`)
            setUser({
                authDone: false,
                user: undefined
            })
        } catch (error) {
            authUnsuccessful()
            console.error(error)
        }
    }
    return (
        <Router>
            <Header/>
            <Routes>


                    <Route path="/login" element={<Login/>}/>
                    < Route path="/register" element={<Register/>}/>


                        <Route path="/" element={<Home/>}/>


            </Routes>
        </Router>
    );
}

export default App;
