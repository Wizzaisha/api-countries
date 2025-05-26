import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Module1State {
  currentNumber: number;
}

const initialState: Module1State = {
  currentNumber: 0,
};

const module1Slice = createSlice({
  name: "module1",
  initialState,
  reducers: {
    //reducers
    increaseCounter: (state) => {
      state.currentNumber++;
    },
    decreaseCounter: (state) => {
      state.currentNumber--;
    },
    setCounter: (state, action: PayloadAction<number>) => {
      state.currentNumber = action.payload;
    },
    resetCounter: (state) => {
      state.currentNumber = initialState.currentNumber;
    },
  },
});

export const { increaseCounter, decreaseCounter, setCounter, resetCounter } =
  module1Slice.actions;

export default module1Slice.reducer;
