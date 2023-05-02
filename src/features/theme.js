import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = "";

export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: INITIAL_STATE },
  reducers: {
    changeTheme: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
