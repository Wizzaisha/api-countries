import axios from "axios";
import axiosBase from "../../core/utils/api/axiosBase";

// Axios base, osea con incerceptor
export const getSomething = async () => {
  return await axiosBase.get(`/todoitems`);
};

//Axios
export const postSomething = async (data: any) => {
  return await axios.post("http://localhost:3000/algo", data);
};
