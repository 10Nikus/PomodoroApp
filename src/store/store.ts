import { configureStore } from "@reduxjs/toolkit";
import modeToggle from "./mode-slice";

export const store = configureStore({
  reducer: {
    modeToggle,
  },
});
