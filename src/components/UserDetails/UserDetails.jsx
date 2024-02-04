import React from "react";
import RemoveUsers from "./RemoveUsers/RemoveUsers";
import { fakeUserData } from "../../api";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/slices/UserSlice";
import DisplayUsers from "./DisplayUsers/DisplayUsers";
import "./UserDetails.css";

export default function UserDetails() {
  const dispatch = useDispatch();

  function createUser(fakeUser) {
    dispatch(addUser(fakeUser));
  }
  return (
    <>
      <div
        style={{ width: "55vw" }}
        className="container mt-4 d-flex justify-content-between"
      >
        <h5 className="d-inline">List of User Details</h5>
        <button
          onClick={() => createUser(fakeUserData())}
          className="btn btn-sm btn-primary d-inline"
        >
          Add New User
        </button>
      </div>
      <br />
      <div className="container userDetails d-flex justify-content-center">
        <ul className="list-group list-group-flush">
          <DisplayUsers />
        </ul>
      </div>
      <hr />
      <RemoveUsers />
    </>
  );
}
