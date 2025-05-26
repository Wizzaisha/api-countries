import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CountriesState {
  currentTheme: string;
}

const initialState: CountriesState = {
  currentTheme: "",
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    //reducers
    setCurrentTheme: (state, action: PayloadAction<string>) => {
      state.currentTheme = action.payload;
    },
  },
});

export const { setCurrentTheme } = countriesSlice.actions;

export default countriesSlice.reducer;
