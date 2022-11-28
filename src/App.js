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
import {useContext} from "react";
import {AuthContext} from "./context/authContext";
function App() {


    return (
        <Router>
            <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/login" element={<Login/>}/>
            < Route path="/register" element={<Login/>}/>
        </Routes>
            </Router>
    );
}

export default App;
