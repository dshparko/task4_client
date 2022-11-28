import "./header.css";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {useState} from "react";
function Header() {

    const navigate = useNavigate();

    const [err, setErr] = useState(null);

    const handleClick = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000/server/auth/logout");
            navigate('/login');
        } catch (err) {
            setErr(err.response.data);
        }
    };

    return (
        <header>
            <h2 className=" container-fluid navbar navbar-expand-sm justify-content-center">Task 4</h2>
            <button className="btn btn-primary" onClick={handleClick}>Log out</button>
        </header>
    );
}

export default Header;