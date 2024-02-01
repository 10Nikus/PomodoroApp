import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false as boolean,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal(state) {
      state.value = !state.value;
    },
  },
});

export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;
