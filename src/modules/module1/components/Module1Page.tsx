import { useDispatch } from "react-redux";
import PrimaryButton from "../../core/components/buttons/PrimaryButton";
import { useAppSelector } from "../../core/hooks/storeHook";
import { increaseCounter } from "../store/module1Slice";
import { useState, useEffect } from "react";
import { getSomething } from "../services/module1Service";
import { Module1ResponseModel } from "../model/module1Models";

const Module1Page = () => {
  const { currentNumber } = useAppSelector((state) => state.module1);

  const [data, setData] = useState<Module1ResponseModel[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseCounter());
  };

  return (
    <div>
      <h1>Hello module 1</h1>
      <p>Conter Redux: {currentNumber}</p>

      <ul className="list bg-base-100 rounded-box shadow-md">
        {data.length > 0 ? (
          data?.map((task) => {
            return (
              <li className="list-row" key={task.id}>
                {task.name}
              </li>
            );
          })
        ) : (
          <li className="list-row">No items</li>
        )}
      </ul>

      <PrimaryButton onClick={handleIncrease}>Increase</PrimaryButton>
    </div>
  );

  async function getData() {
    try {
      const response = await getSomething();
      const responseData = response.data as Module1ResponseModel[];
      setData(responseData);
    } catch (error) {
      console.log("error", error);
    }
  }
};

export default Module1Page;
