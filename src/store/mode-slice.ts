import { createSlice } from "@reduxjs/toolkit";

if (!window.localStorage.getItem("theme")) {
  window.localStorage.setItem("theme", "light");
}

const initialState = {
  value: window.localStorage.getItem("theme") as "dark" | "light",
};

const darkModeSlice = createSlice({
  name: "colorMode",
  initialState,
  reducers: {
    toggleMode(state) {
      state.value = state.value === "dark" ? "light" : "dark";
      window.localStorage.setItem("theme", state.value);
    },
  },
});

export const { toggleMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
