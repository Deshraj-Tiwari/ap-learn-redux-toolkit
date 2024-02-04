import { createSlice } from "@reduxjs/toolkit";
import { deleteAll } from "../actions";

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
    // deleteAll(state, action) {
    //   return [];
    // },
  },
  extraReducers(builder) {
    builder.addCase(deleteAll, () => {
      return [];
    });
  },
});

export const { addUser, removeUser } = userSlice.actions;
