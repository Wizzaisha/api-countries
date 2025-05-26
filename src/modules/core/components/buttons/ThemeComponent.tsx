import { MoonIcon, SunIcon } from "../../utils/icons/getIcons";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHook";
import { setCurrentTheme } from "../../../countries-page/store/countriesSlice";

const ThemeComponent: React.FC = () => {
  const { currentTheme } = useAppSelector((state) => state.countries);

  const dispatch = useAppDispatch();

  const setTheme = (theme: "light" | "dark") => {
    document.querySelector("body")?.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    dispatch(setCurrentTheme(theme));
  };

  const handleToggle = () => {
    const currentTheme =
      document.querySelector("body")?.getAttribute("data-theme") === "light"
        ? "dark"
        : "light";

    setTheme(currentTheme);
  };

  return (
    <button onClick={handleToggle} className="btn btn-ghost max-w-md">
      {currentTheme && currentTheme === "dark" ? (
        <>
          <img src={SunIcon} alt="icon" className="w-5"></img>
          <span>Light Mode</span>
        </>
      ) : (
        <>
          <img src={MoonIcon} alt="icon" className="w-5"></img>
          <span>Dark Mode</span>
        </>
      )}
    </button>
  );
};

export default ThemeComponent;
