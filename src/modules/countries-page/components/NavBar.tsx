import ThemeComponent from "../../core/components/buttons/ThemeComponent";

const NavBar = () => {
  return (
    <div className="w-full flex flex-row justify-between items-center py-5 sm:px-10 md:px-20 shadow-sm bg-primary">
      <h1 className="text-preset2">Where in the world?</h1>

      <ThemeComponent></ThemeComponent>
    </div>
  );
};

export default NavBar;
