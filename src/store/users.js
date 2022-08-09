import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const users = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setUsers } = users.actions;
export default users.reducer;
