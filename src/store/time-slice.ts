import { createSlice } from "@reduxjs/toolkit";

export interface time {
  workTime: number;
  breakTime: number;
}

const initialState: time = {
  workTime: 20,
  breakTime: 5,
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
  },
});

export const { setBreakTime, setWorkTime } = timeSlice.actions;
export default timeSlice.reducer;
