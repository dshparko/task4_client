import React from "react";
import "./home.css";
import TableCell from "../table/TableCell";

function Home(props) {
    const {
        isCheckedAll,
        onUnblockUserClick,
        onBlockUserClick,
        onDeleteUserClick,
    } = props;

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <p className="fs-1 text-center fw-bold text-bg-dark main-title">
                User table
            </p>
            <div
                className="btn-group main-buttons"
                role="group"
                aria-label="Basic mixed styles example"
            >
                <button
                    type="button"
                    className="btn btn-outline-success fw-bold"
                    onClick={() => {
                        onUnblockUserClick();
                    }}
                >
                    <i className="bi-unlock-fill"/>
                </button>
                <button
                    type="button"
                    className="btn btn-outline-success fw-bold"
                    onClick={() => {
                        onBlockUserClick();
                    }}
                >
                    <i className="bi-lock-fill"/>
                </button>

                <button
                    type="button"
                    className="btn btn-outline-success fw-bold"
                    onClick={() => {
                        onDeleteUserClick();
                    }}
                >
                    <i className="bi-trash3-fill"/>
                </button>
            </div>
            <table className="table table-hover table-light main-table">
                <thead className="table-primary">
                <tr>
                    <th scope="col">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={isCheckedAll || ""}
                            id="flexCheckIndeterminate"
                            checked={isCheckedAll}

                        />
                        <label
                            className="form-check-label"
                            htmlFor="flexCheckIndeterminate"
                        >
                            Highlight/Cancel all
                        </label>
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

                </tbody>
            </table>
        </div>
    );
}

export default Home;