import Spinner from "../../core/components/spinner/Spinner";
import { useAppSelector } from "../../core/hooks/storeHook";
import CountriesFilters from "./CountriesFilters";
import CountryCard from "./CountryCard";

const CountriesList = () => {
  const { allCountries, getStatusAllContries } = useAppSelector(
    (state) => state.countries
  );

  return (
    <>
      <CountriesFilters />

      {getStatusAllContries === "succeeded" ? (
        <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20 pt-15 pb-15">
          {allCountries.length > 0 ? (
            allCountries.map((country) => {
              return (
                <CountryCard
                  key={country.name.official}
                  data={country}
                ></CountryCard>
              );
            })
          ) : (
            <p className="text-preset2">Sorry, not data found.</p>
          )}
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default CountriesList;
