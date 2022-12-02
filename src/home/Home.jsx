import React, {useEffect, useState} from "react";
import "./home.css";
import axios from "axios";


function Home() {
    const [users, setUser] = useState([]);


    useEffect(() => {

        getUsers();

    }, []);


    const [checkboxes, setCheckboxes] = useState([]);
    const changeCheckboxes = (id) => {
        setCheckboxes(
            checkboxes.includes(id)
                ? checkboxes.filter((el) => el !== id)
                : [...checkboxes, id]
        );
    };
    const getUsers = async () => {
        const response = await axios.get("http://localhost:8000/server/users/data");
        setUser(response.data);
    };
    const deleteUser = (id) => {
        axios.delete(`http://localhost:8000/server/users/delete/${id}`);
        window.location.reload(true)
    }

    function blockUser(id) {
        axios.patch(`http://localhost:8000/server/users/block/${id}`);
        window.location.reload(true)
    }


    function unblockUser(id) {
        axios.patch(`http://localhost:8000/server/users/unblock/${id}`);
        window.location.reload(true)
    }


    return (
        <main className='container'>
            <br/>
            <div className="btn-toolbar" role="toolbar">
                <div className="btn-group me-2">
                    <button type="button" className="btn btn-danger" onClick={() => blockUser(13)}>Block</button>
                </div>
                <div className="btn-group me-2">
                    <button type="button" className="btn btn-success" onClick={() => unblockUser(13)}>Unblock</button>
                </div>
                <div className="btn-group">
                    <button onClick={() => deleteUser(14)}>Delete</button>
                </div>
            </div>
            <br/>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th scope="col">
                        <input type="checkbox"
                               onChange={e => {
                                   let checked = e.target.checked;
                                   setUser(
                                       users.map(d => {
                                           d.select = checked;
                                           return d;
                                       })
                                   );
                               }}
                        />
                    </th>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Registration date</th>
                    <th scope="col">Last login date</th>
                    <th scope="col">Status</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user, index) => (

                    <tr key={user.id}>
                        <td>
                            <input onChange={event => {
                                let checked = event.target.checked;
                                setUser(
                                    users.map(data => {
                                        if (user.id === data.id) {
                                            changeCheckboxes(user.id);
                                            data.select = checked;
                                        }
                                        return data;
                                    })
                                );
                            }}
                                   type="checkbox"
                                   checked={user.select}
                            /></td>
                        <td>{index + 1}</td>
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