import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../core/hooks/storeHook";
import { getAllCountries } from "../services/countriesService";
import CountriesList from "./CountriesList";

const CountriesPage = () => {
  const dispatch = useAppDispatch();

  const { getStatusAllContries } = useAppSelector((state) => state.countries);

  useEffect(() => {
    if (getStatusAllContries === "idle") {
      dispatch(getAllCountries());
    }
  }, [dispatch, getStatusAllContries]);

  return (
    <section className="w-full">
      <CountriesList></CountriesList>
    </section>
  );
};

export default CountriesPage;
