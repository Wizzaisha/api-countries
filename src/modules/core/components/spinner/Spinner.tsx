const Spinner = () => {
  return (
    <div className="w-full h-[20rem] flex flex-col justify-center items-center text-preset2">
      <p>
        Loading <span className="loading loading-spinner loading-lg"></span>
      </p>
    </div>
  );
};

export default Spinner;
