import { useState, useCallback, useEffect, ChangeEvent } from "react";
import { IoMdSearch } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "../../core/hooks/storeHook";
import {
  getAllCountries,
  getCountriesByName,
  getCountryByRegion,
} from "../services/countriesService";
import { CiFilter } from "react-icons/ci";

const CountriesFilters = () => {
  const dispatch = useAppDispatch();

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [regionSelected, setRegionSelected] = useState<string>("");

  const { allRegions } = useAppSelector((state) => state.countries);

  const timeout: number = 1000;

  const handleSearchFilter = useCallback(
    async (searchQuery: string) => {
      console.log("search", searchQuery);
      dispatch(getCountriesByName(searchQuery));
    },
    [dispatch]
  );

  const handleRegionSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setRegionSelected(value);
    dispatch(getCountryByRegion(value));
  };

  const handleClearFilters = () => {
    setRegionSelected("");
    setSearchQuery("");
    dispatch(getAllCountries());
  };

  useEffect(() => {
    const getData = setTimeout(() => {
      if (searchQuery.trim() !== "") {
        handleSearchFilter(searchQuery);
      }
    }, timeout);

    return () => clearTimeout(getData);
  }, [handleSearchFilter, searchQuery]);

  return (
    <div className="w-full flex flex-row flex-wrap justify-between items-center gap-10">
      <label className="input input-primary bg-primary text-primary-content text-preset5-regular input-xl shadow-sm md:w-[30rem] focus-within:shadow-sm">
        <IoMdSearch />
        <input
          type="text"
          className="grow"
          placeholder="Search for a country..."
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </label>

      <select
        defaultValue={regionSelected}
        className="select select-primary bg-primary text-primary-content select-xl text-preset5-regular shadow-sm focus-within:shadow-sm"
        onChange={(event) => handleRegionSelect(event)}
      >
        <option disabled value="">
          Filter by Region
        </option>
        {allRegions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>

      <button className="btn btn-dash" onClick={handleClearFilters}>
        <CiFilter /> Clear filters
      </button>
    </div>
  );
};

export default CountriesFilters;
