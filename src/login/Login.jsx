import {useContext, useState } from "react";
import "./login.css";
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../context/authContext";
import axios from "axios";

const Login = () => {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });
    const [err, setErr] = useState(null);

    const navigate = useNavigate()

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/server/auth/login", inputs);

            navigate("/");
        } catch (err) {
            setErr(err.response.data);
        }
    };
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h2>Task 4 itransition.</h2>
                    <p>
                        Web application with registration and authentication.
                        Non-authenticated users should not have access to the user management (admin panel).
                        Authenticated users should have access the user management table: id, name, e-mail, last login time, registration time, status (active/blocked).
                        If user account is blocked or deleted any next user’s request should redirect to the login page.
                        Blocked user should not be able to login, deleted user can re-register.
                    </p>
                    <span>Don't you have an account?</span>
                    <Link to="/register">
                        <button className="btn btn-primary">Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h2 className="d-block mx-auto">Login</h2>
                    <form>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                        />
                        <input
                            className="form-control"
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                        />
                        {err && err}
                        <button className="btn btn-primary d-block mx-auto " onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
