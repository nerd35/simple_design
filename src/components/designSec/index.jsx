import DesignImg from "../../assets/lernsection.png";

const DesignSec = () => {
  return (
    <div clasName="py-5 px-3 container text-center ">
      <h1 className="mt-5 text-center design-title">
        UNIQUE SCREENS THAT WORK PERFECTLY
      </h1>
      <p className="design-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt
        <br /> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation.
      </p>
      <div className="text-center">
        <img src={DesignImg} alt="" className="mt-5 mb-5 text-center design-img" />
      </div>
    </div>
  );
};

export default DesignSec;
