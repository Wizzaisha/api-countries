import { combineReducers } from "@reduxjs/toolkit";
import module1Slice from "../../module1/store/module1Slice";
import countriesSlice from "../../countries-page/store/countriesSlice";

const rootReducer = combineReducers({
  //Reducers
  countries: countriesSlice,
  module1: module1Slice,
});

export default rootReducer;
