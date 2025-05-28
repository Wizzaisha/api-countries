import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosBase from "../../core/utils/api/axiosBase";
import { CountriesModel, CountryDetails } from "../model/contriesModel";

// Axios base, osea con incerceptor
// export const getAllCountries = async () => {
//   return await axiosBase.get(`all?fields=name,flags,population,region,capital`);
// };

const fieldsString: string = "fields=name,flags,population,region,capital,ccn3";

export const getAllCountries = createAsyncThunk(
  "countries/fetchAllCountries",
  async () => {
    const response = await axiosBase.get(`all?${fieldsString}`);
    return response.data as CountriesModel[];
  }
);

export const getCountryByName = createAsyncThunk(
  "countries/fetchCountryByName",
  async (name: string) => {
    const response = await axiosBase.get(`name/${name}?fullText=true`);
    return response.data[0] as CountryDetails;
  }
);

export const getCountryByRegion = createAsyncThunk(
  "countries/fetchCountriesByRegion",
  async (region: string) => {
    const response = await axiosBase.get(`region/${region}?${fieldsString}`);
    return response.data as CountriesModel[];
  }
);

export const getCountriesByName = createAsyncThunk(
  "countries/fetchCountriesByName",
  async (name: string) => {
    const response = await axiosBase.get(`name/${name}?${fieldsString}`);
    return response.data as CountriesModel[];
  }
);
