import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { name: "", age: 0 };

export const userSlice = createSlice({
  name: "user",
  initialState: { value: INITIAL_STATE },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = INITIAL_STATE;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
