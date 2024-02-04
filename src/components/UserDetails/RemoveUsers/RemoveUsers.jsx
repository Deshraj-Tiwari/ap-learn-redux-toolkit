import React from "react";
import { useDispatch } from "react-redux";
import { deleteAll } from "../../../store/actions";
// import { deleteAll } from "../../../store/slices/UserSlice";

export default function RemoveUsers() {
  const dispatch = useDispatch();

  const delAllUsers = () => {
    dispatch(deleteAll());
  };
  return (
    <div
      style={{ width: "55vw" }}
      className="container d-flex justify-content-between"
    >
      <span>&nbsp;</span>
      <button onClick={() => delAllUsers()} className="btn btn-danger btn-sm">
        Delete All Users
      </button>
    </div>
  );
}
