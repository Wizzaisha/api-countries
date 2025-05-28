import { useEffect } from "react";
import { Link, useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../core/hooks/storeHook";
import { getCountryByName } from "../services/countriesService";
import { IoMdArrowBack } from "react-icons/io";
import Spinner from "../../core/components/spinner/Spinner";

const CountryDetails = () => {
  const params = useParams();

  const { countryDetails, getCountryByNameStatus } = useAppSelector(
    (state) => state.countries
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (params.countryId) {
      dispatch(getCountryByName(params.countryId));
    }
  }, [dispatch, params]);

  return (
    <div className="w-full md:pb-20">
      <Link to={"/"}>
        <button className="btn btn-primary text-base-content w-32">
          <IoMdArrowBack /> Back
        </button>
      </Link>

      {getCountryByNameStatus === "succeeded" ? (
        countryDetails ? (
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 items-center justify-center  sm:mt-0 md:mt-10 mt-20 md:gap-20">
            <img
              className="sm:h-[20rem] md:h-[25rem] xl:[h-30rem] sm:w-full md:w-full xl:w-[90%] w-full rounded-2xl"
              src={countryDetails.flags.svg}
              alt="flag"
              loading="lazy"
            />

            <div className="w-full">
              <p className="text-preset1">{countryDetails.name.official}</p>

              <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5 mt-10">
                <p className="text-preset5-regular">
                  Native name:{" "}
                  <span className="text-preset5-light">
                    {countryDetails.name.common}
                  </span>
                </p>
                <p className="text-preset5-regular">
                  Population:{" "}
                  <span className="text-preset5-light">
                    {countryDetails.population}
                  </span>
                </p>
                <p className="text-preset5-regular">
                  Region:{" "}
                  <span className="text-preset5-light">
                    {countryDetails.region}
                  </span>
                </p>
                <p className="text-preset5-regular">
                  Sub Region:{" "}
                  <span className="text-preset5-light">
                    {countryDetails.subregion}
                  </span>
                </p>
                <p className="text-preset5-regular">
                  Capital:{" "}
                  <span className="text-preset5-light">
                    {countryDetails.capital && countryDetails.capital[0]}
                  </span>
                </p>
                <p className="text-preset5-regular">
                  Top Level Domain:
                  {countryDetails.tld?.map((item) => (
                    <span key={item} className="text-preset5-light">
                      {" "}
                      {item}
                    </span>
                  ))}
                </p>
                <p className="text-preset5-regular">
                  Currencies:
                  {countryDetails?.currencies &&
                    Object.keys(countryDetails.currencies).map(
                      (currency, index) => (
                        <span
                          key={currency as string}
                          className="text-preset5-light"
                        >
                          {" "}
                          {currency as string}
                          {Object.keys(countryDetails.currencies).length - 1 ===
                          index
                            ? ""
                            : ","}
                        </span>
                      )
                    )}
                </p>
                <p className="text-preset5-regular">
                  Languajes:
                  {countryDetails?.languages &&
                    Object.values(countryDetails.languages).map(
                      (language, index) => (
                        <span
                          key={language as string}
                          className="text-preset5-light"
                        >
                          {" "}
                          {language as string}
                          {Object.values(countryDetails.languages).length -
                            1 ===
                          index
                            ? ""
                            : ","}
                        </span>
                      )
                    )}
                </p>
              </div>

              <div className="text-preset5-regular mt-10 flex flex-row justify-start items-center gap-5">
                <p>Border Countries:</p>

                <div className="flex flex-row flex-wrap justify-between items-center gap-5 text-preset5-light">
                  {countryDetails?.borders &&
                    countryDetails.borders.map((border) => (
                      <span
                        className="border-[1px] border-base-300 px-4"
                        key={border}
                      >
                        {border}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>Sorry, data not found.</div>
        )
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default CountryDetails;
