import { useEffect } from "react";
import { Outlet } from "react-router";
import { useAppDispatch } from "./modules/core/hooks/storeHook";
import { setCurrentTheme } from "./modules/countries-page/store/countriesSlice";
import NavBar from "./modules/countries-page/components/NavBar";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const selectedTheme = localStorage.getItem("theme");

    if (selectedTheme) {
      document.querySelector("body")?.setAttribute("data-theme", selectedTheme);
      dispatch(setCurrentTheme(selectedTheme));
    }
  }, [dispatch]);

  return (
    <div className="w-full bg-base-100">
      <NavBar></NavBar>

      <div className="w-full mt-10 sm:px-10 md:px-20">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
