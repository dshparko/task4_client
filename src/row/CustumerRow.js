import React from "react";

function CustomerRow(props) {
    return props.stateCustomer.map((d, index) => (
        <tr key={d.id}>
            <td>
                <input
                    type="checkbox"
                    checked={d.select}
                    onChange={e => {
                        let value = e.target.checked;
                        props.setCustomerState(
                            props.stateCustomer.map(sd => {
                                if (sd.id === d.id) {
                                    sd.select = value;
                                }
                                return sd;
                            })
                        );
                    }}
                />
            </td>
            <td>{index + 1}</td>
            <td>{d.username}</td>
            <td>{d.email}</td>
            <td>{d.createTime}</td>
            <td>{d.lastLoginTime}</td>
            <td>{d.status}</td>
        </tr>
    ));
}

export default CustomerRow;