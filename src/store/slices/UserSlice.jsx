import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      return state.filter((user) => user != action.payload);
    },
    deleteAll(state, action) {},
  },
});

export const { addUser, removeUser, deleteAll } = userSlice.actions;
