import React from "react";
import { useNavigate } from "react-router-dom";

const BerandaDriver = () => {
  const navigate = useNavigate();
  const handlePenitipButtonClick = () => {
    navigate("/homeUser");
  };
  return (
    <div>
      <div className="flex overflow-hidden">
        <div className="sideMenu  w-[250px] flex jusify-between gap-0 flex-col h-screen bg-blue-500">
          <div className="bg-cyan-500 h-[70px]"></div>
          <div className="h-screen flex flex-col justify-start">
            <div>menu1</div>
            <div>menu2</div>
          </div>
          <div className="bg-green-400 h-[60px] flex justify-center items-center">
            <button onClick={handlePenitipButtonClick} className="p-[5px] bg-black text-white">
              Driver
            </button>
          </div>
        </div>
        <div className="Main w-[100%] h-screen bg-red-500">main Driver</div>
      </div>
    </div>
  );
};
export default BerandaDriver;