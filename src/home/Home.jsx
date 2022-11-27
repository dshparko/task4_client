import React, {useEffect, useState} from "react";
import "./home.css";
import TableCell from "../table/TableCell";
import axios from "axios";

function Home() {
    const [users, setUser] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios.get("http://localhost:8000/server/users/data");
        setUser(response.data);
    };


    return (
        <main className='container'>
            <br />
            <div className="btn-toolbar" role="toolbar">
                <div className="btn-group me-2" role="group">
                    <button type="button" className="btn btn-danger">Block</button>
                </div>
                <div className="btn-group me-2" role="group">
                    <button type="button" className="btn btn-success">Unblock</button>
                </div>
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-dark">Delete</button>
                </div>
            </div>
            <br />
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th scope="col"><input type='checkbox' /></th>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Registration date</th>
                    <th scope="col">Last login date</th>
                    <th scope="col">Status</th>
                </tr>
                </thead>
                <tbody>
                {/* ARRAY OF USERS */}
                {users.map((user, index) => (
                    <tr key={user.id}>
                        <td ><input type='checkbox' /></td>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.createTime}</td>
                        <td>{user.lastLoginTime}</td>
                        <td>{user.status}</td>

                    </tr>
                ))}
                </tbody>
            </table>
        </main>);
}

export default Home;