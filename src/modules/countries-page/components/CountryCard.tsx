import { truncateText } from "../../core/utils/others/truncateText";
import { ContriesModel } from "../model/contriesModel";

interface CountryCardProps {
  data: ContriesModel;
}

const CountryCard: React.FC<CountryCardProps> = ({ data }) => {
  return (
    <div className="card 2xl:w-80 bg-primary shadow-md cursor-pointer">
      <figure>
        <img
          className="w-full h-[10rem]"
          src={data.flags.png}
          alt={data.name.official}
        />
      </figure>
      <div className="card-body">
        <div className="tooltip" data-tip={data.name.official}>
          <h2 className="card-title text-preset3">
            {truncateText(data.name.official, 20)}
          </h2>
        </div>

        <p className="text-preset5-regular">
          Population:{" "}
          <span className="text-preset5-light">{data.population}</span>
        </p>
        <p className="text-preset5-regular">
          Region: <span className="text-preset5-light">{data.region}</span>
        </p>
        <p className="text-preset5-regular">
          Capital: <span className="text-preset5-light">{data.capital[0]}</span>
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
