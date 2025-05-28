import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CountriesModel, CountryDetails } from "../model/contriesModel";
import {
  getAllCountries,
  getCountriesByName,
  getCountryByName,
  getCountryByRegion,
} from "../services/countriesService";

export interface CountriesState {
  currentTheme: string;
  getStatusAllContries: "idle" | "loading" | "succeeded" | "failed";
  allCountries: CountriesModel[];
  getAllCountriesError: string | null;
  allRegions: string[];
  countryDetails: CountryDetails | null;
  getCountryByNameStatus: "idle" | "loading" | "succeeded" | "failed";
  getCouyntryByNameError: string | null;
  getCountriesByRegionStatus: "idle" | "loading" | "succeeded" | "failed";
  getCouyntriesByRegionError: string | null;
  getCountriesByNameStatus: "idle" | "loading" | "succeeded" | "failed";
  getCouyntriesByNameError: string | null;
}

const initialState: CountriesState = {
  currentTheme: "",
  getStatusAllContries: "idle",
  getAllCountriesError: null,
  allCountries: [],
  allRegions: [],
  countryDetails: null,
  getCountryByNameStatus: "idle",
  getCouyntryByNameError: null,
  getCountriesByRegionStatus: "idle",
  getCouyntriesByRegionError: null,
  getCountriesByNameStatus: "idle",
  getCouyntriesByNameError: null,
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
      //getAllCountries
      .addCase(getAllCountries.pending, (state) => {
        state.getStatusAllContries = "loading";
      })
      .addCase(getAllCountries.fulfilled, (state, action) => {
        state.getStatusAllContries = "succeeded";
        const responseData = action.payload as CountriesModel[];
        state.allRegions = responseData
          .filter(
            (obj, index, self) =>
              index === self.findIndex((t) => t.region === obj.region)
          )
          .map((element) => element.region);
        state.allCountries = responseData;
      })
      .addCase(getAllCountries.rejected, (state, action) => {
        state.getStatusAllContries = "failed";
        state.getAllCountriesError =
          action.error.message || "The request has failed";
      })
      //getCountryByName
      .addCase(getCountryByName.pending, (state) => {
        state.getCountryByNameStatus = "loading";
      })
      .addCase(getCountryByName.fulfilled, (state, action) => {
        state.getCountryByNameStatus = "succeeded";
        const responseData = action.payload as CountryDetails;
        state.countryDetails = responseData;
      })
      .addCase(getCountryByName.rejected, (state, action) => {
        state.getCountryByNameStatus = "failed";
        state.getCouyntryByNameError =
          action.error.message || "The request has failed";
      })
      //getCountryByRegion
      .addCase(getCountryByRegion.pending, (state) => {
        state.getCountriesByRegionStatus = "loading";
      })
      .addCase(getCountryByRegion.fulfilled, (state, action) => {
        state.getCountriesByRegionStatus = "succeeded";
        const responseData = action.payload as CountriesModel[];
        state.allCountries = responseData;
      })
      .addCase(getCountryByRegion.rejected, (state, action) => {
        state.getCountriesByRegionStatus = "failed";
        state.getCouyntriesByRegionError =
          action.error.message || "The request has failed";
      })
      //getCountriesByName
      .addCase(getCountriesByName.pending, (state) => {
        state.getCountriesByNameStatus = "loading";
      })
      .addCase(getCountriesByName.fulfilled, (state, action) => {
        state.getCountriesByNameStatus = "succeeded";
        const responseData = action.payload as CountriesModel[];
        state.allCountries = responseData;
      })
      .addCase(getCountriesByName.rejected, (state, action) => {
        state.getCountriesByNameStatus = "failed";
        state.getCouyntriesByNameError =
          action.error.message || "The request has failed";
      });
  },
});

export const { setCurrentTheme } = countriesSlice.actions;

export default countriesSlice.reducer;
