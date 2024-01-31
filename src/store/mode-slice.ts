import { createSlice } from "@reduxjs/toolkit";

export interface mode {
  value: "dark" | "light";
}

const initialState: mode = {
  value: "light",
};

const darkModeSlice = createSlice({
  name: "colorMode",
  initialState,
  reducers: {
    toggleMode(state) {
      state.value = state.value === "dark" ? "light" : "dark";
    },
  },
});

export const { toggleMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
