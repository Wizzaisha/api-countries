import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosBase from "../../core/utils/api/axiosBase";
import { ContriesModel } from "../model/contriesModel";

// Axios base, osea con incerceptor
// export const getAllCountries = async () => {
//   return await axiosBase.get(`all?fields=name,flags,population,region,capital`);
// };

export const getAllCountries = createAsyncThunk(
  "countries/fetchAllCountries",
  async () => {
    const response = await axiosBase.get(
      `all?fields=name,flags,population,region,capital`
    );
    return response.data as ContriesModel[];
  }
);
