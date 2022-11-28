import "./tableCell.css";

function TableCell(props) {
    const {
        _id,
        username,
        email,
        createTime,
        lastLoginTime,
        status,
        isChecked,
    } = props.values;

    const { onChange } = props;
    return (
        <tr>
            <td>
                <input
                    className="form-check-input"
                    type="checkbox"
                    value={isChecked || ""}
                    id="flexCheckIndeterminate"
                    checked={isChecked}
                    onChange={() => onChange(_id, !isChecked)}
                />
            </td>
            <td>{_id}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>{createTime}</td>
            <td>{lastLoginTime}</td>
            <td>{status}</td>
        </tr>
    );
}

export default TableCell;