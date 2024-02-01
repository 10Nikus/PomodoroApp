import { configureStore } from "@reduxjs/toolkit";
import modeToggle from "./mode-slice";
import timeSlice from "./time-slice";
import modalSlice from "./modal-slice";
export const store = configureStore({
  reducer: {
    modeToggle,
    timeSlice,
    modalSlice,
  },
});
