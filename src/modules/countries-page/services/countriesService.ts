import axiosBase from "../../core/utils/api/axiosBase";

// Axios base, osea con incerceptor
export const getAllCountries = async () => {
  return await axiosBase.get(`all?fields=name,flags,population,region,capital`);
};
