import { useState, useCallback, useEffect } from "react";
import { IoMdSearch } from "react-icons/io";

const CountriesFilters = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchFilter = useCallback(async (searchQuery: string) => {
    console.log("search", searchQuery);
  }, []);

  useEffect(() => {
    console.log("effect search", searchQuery);
    const getData = setTimeout(() => {
      handleSearchFilter(searchQuery);
    }, 2000);

    return () => clearTimeout(getData);
  }, [handleSearchFilter, searchQuery]);

  return (
    <div className="w-full flex flex-row flex-wrap justify-between items-center gap-10">
      <label className="input input-primary bg-primary text-primary-content text-preset5-regular input-xl shadow-sm md:w-[30rem] focus-within:shadow-sm">
        <IoMdSearch />
        <input
          type="search"
          className="grow"
          placeholder="Search for a country..."
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </label>

      <select
        defaultValue="Filter by Region"
        className="select select-primary bg-primary text-primary-content select-xl text-preset5-regular shadow-sm focus-within:shadow-sm"
      >
        <option disabled>Filter by Region</option>
        <option>VScode</option>
        <option>VScode fork</option>
        <option>Another VScode fork</option>
      </select>
    </div>
  );
};

export default CountriesFilters;
