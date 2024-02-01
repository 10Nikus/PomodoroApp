import { createSlice } from "@reduxjs/toolkit";

export interface time {
  workTime: number;
  breakTime: number;
  longBreakTime: number;
}

const initialState: time = {
  workTime: 1,
  breakTime: 0.2,
  longBreakTime: 0.5,
};

const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    setWorkTime(state, action) {
      state.workTime = action.payload;
    },
    setBreakTime(state, action) {
      state.breakTime = action.payload;
    },
    setLongBreakTime(state, action) {
      state.longBreakTime = action.payload;
    },
  },
});

export const { setBreakTime, setWorkTime } = timeSlice.actions;
export default timeSlice.reducer;
