import React, {useEffect, useState} from "react";
import "./home.css";
import axios from "axios";
import CustomerRow from "../row/CustumerRow";


function Home() {
    const [users, setUsers] = useState([]);

    const [user, setUser] = useState([]);


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
        setUsers(response.data);
    };
    const deleteUser = (id) => {
        let arrayids = [];
        users.forEach(d => {
            if (d.select) {
                arrayids.push(d.id);
            }
        });

            axios.delete(`http://localhost:8000/server/users/delete/${arrayids}`);

            window.location.reload(true)


    }

    function blockUser(id) {
        let arrayids = [];
        users.forEach(d => {
            if (d.select) {
                arrayids.push(d.id);
            }
        });
        axios.patch(`http://localhost:8000/server/users/block/${arrayids}`);
        window.location.reload(true)
    }


    function unblockUser(id) {
        let arrayids = [];
        users.forEach(d => {
            if (d.select) {
                arrayids.push(d.id);
            }
        });
        axios.patch(`http://localhost:8000/server/users/unblock/${arrayids}`);
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
                <></>
                <CustomerRow
                    stateCustomer={users}
                    setCustomerState={setUsers}
                />
                </tbody>
            </table>
        </main>);
}

export default Home;