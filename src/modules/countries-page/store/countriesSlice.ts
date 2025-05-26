import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContriesModel } from "../model/contriesModel";
import { getAllCountries } from "../services/countriesService";

export interface CountriesState {
  currentTheme: string;
  getStatusAllContries: "idle" | "loading" | "succeeded" | "failed";
  allCountries: ContriesModel[];
  getAllCountriesError: string | null;
}

const initialState: CountriesState = {
  currentTheme: "",
  getStatusAllContries: "idle",
  getAllCountriesError: null,
  allCountries: [],
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
  extraReducers: (builder) => {
    builder
      .addCase(getAllCountries.pending, (state) => {
        state.getStatusAllContries = "loading";
      })
      .addCase(getAllCountries.fulfilled, (state, action) => {
        state.getStatusAllContries = "succeeded";
        const responseData = action.payload as ContriesModel[];
        console.log("api response", responseData);
        state.allCountries = responseData;
      })
      .addCase(getAllCountries.rejected, (state, action) => {
        state.getStatusAllContries = "failed";
        state.getAllCountriesError =
          action.error.message || "The request has failed";
      });
  },
});

export const { setCurrentTheme } = countriesSlice.actions;

export default countriesSlice.reducer;
