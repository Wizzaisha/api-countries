import { useEffect, useState } from "react";
import { getAllCountries } from "../services/countriesService";
import { ContriesModel } from "../model/contriesModel";
import CountryCard from "./CountryCard";
import CountriesFilters from "./CountriesFilters";

const CountriesList = () => {
  const [countries, setCountries] = useState<ContriesModel[]>([]);

  useEffect(() => {
    getCountriesData();
  }, []);

  async function getCountriesData() {
    try {
      const response = await getAllCountries();
      const responseData = response.data as ContriesModel[];
      setCountries(responseData);
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <>
      <CountriesFilters />
      <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20 pt-15 pb-15">
        {countries &&
          countries.map((country) => {
            return (
              <CountryCard
                key={country.name.official}
                data={country}
              ></CountryCard>
            );
          })}
      </div>
    </>
  );
};

export default CountriesList;
