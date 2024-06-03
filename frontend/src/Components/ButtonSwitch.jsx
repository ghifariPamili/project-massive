// ButtonSwitch.js
import React, { useEffect, useState } from "react";

function ButtonSwitch({ onClick, currentPage }) {
  const [position, setPosition] = useState(currentPage);

  useEffect(() => {
    setPosition(currentPage);
  }, [currentPage]);

  return (
    <div>
      <button
        onClick={onClick}
        className={`btn mx-2 w-full h-9 rounded-3xl ${
          position === "driver" ? "bg-white text-colorPrimer border-[2px] border-colorPrimer" : "bg-colorPrimer text-white"
        }`}
      >
        <div
          className={`flex gap-2 justify-center items-center ${
            position === "driver" ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <div className="nameSection text-sm font-semibold">
            {position === "driver" ? "Driver" : "Penitip"}
          </div>
          <div
            className={`circle w-5 h-5 rounded-full transition-transform duration-200 ease-in-out ${
              position === "driver" ? "translate-x-[3px] bg-colorPrimer" : "translate-x-0 bg-white"
            }`}
          ></div>
          
        </div>
      </button>
    </div>
  );
}

export default ButtonSwitch;
