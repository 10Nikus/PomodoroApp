import { createSlice } from "@reduxjs/toolkit";

interface mode {
  mode: string;
}

const initialState: mode = {
  mode: "wait",
};

const actionSlice = createSlice({
  name: "action",
  initialState,
  reducers: {
    startWorking(state) {
      state.mode = "work";
    },
    startBreak: (state) => {
      state.mode = "break";
    },
    startLongBreak: (state) => {
      state.mode = "longBreak";
    },
    pauseTimer: (state, action) => {
      state.mode = "wait " + action.payload;
    },
  },
});

export const { startWorking, startBreak, startLongBreak, pauseTimer } =
  actionSlice.actions;

export default actionSlice.reducer;
