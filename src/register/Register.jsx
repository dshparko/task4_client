import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";

import "./register.css";
import axios from "axios";

const Register = () => {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const [err, setErr] = useState(null);

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000/server/auth/register", inputs);
            navigate('/login');
        } catch (err) {
            setErr(err.response.data);
        }
    };

    console.log(err)

    return (
        <div className="register">
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
                    <span>Do you have an account?</span>
                    <Link to="/login">
                        <button className="btn btn-primary">Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h2 className="d-block mx-auto">Register</h2>
                    <form>
                        <input
                            className="form-control"
                            type="email"
                            placeholder="Username"
                            name="username"
                            onChange={handleChange}
                        />
                        <input
                            className="form-control"
                            type="email"
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
                        <button className="btn btn-primary d-block mx-auto" onClick={handleClick}>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;