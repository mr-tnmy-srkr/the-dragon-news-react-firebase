import img1 from "../../../assets/images/1.png";
import img2 from "../../../assets/images/2.png";
import img3 from "../../../assets/images/3.png";

const LeftSideCard = () => {
  return (
    <div className="space-y-8">
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={img1} alt="Shoes" />
        </figure>
        <div className="card-body">
          <p className="text-lg font-semibold">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </p>
        </div>
      </div>{" "}
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={img2} alt="Shoes" />
        </figure>
        <div className="card-body">
          <p className="text-lg font-semibold">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </p>
        </div>
      </div>{" "}
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={img3} alt="Shoes" />
        </figure>
        <div className="card-body">
          <p className="text-lg font-semibold">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftSideCard;
