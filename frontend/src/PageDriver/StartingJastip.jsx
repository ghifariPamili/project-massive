import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { RiMenuUnfold3Fill } from "react-icons/ri";
import { RiFileListLine } from "react-icons/ri";
import { RiHistoryLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { FiAlertOctagon } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

// Import your components
import AktivitasDriver from './AktivitasDriver';
// import BerandaCompDriver from './BerandaCompDriver';
import RiwayatComponent from './RiwayatDriver';
import ProfileComponent from '../ProfileComponent/ProfileComponent';
import PengaduanComponent from '../Components/PengaduanComponent';
import StartComponent from './StartComponent'


const StartingJastip = () => {
  const navigate = useNavigate();
  const [activeComponent, setActiveComponent] = useState(<StartComponent />);
  const [activeMenu, setActiveMenu] = useState("Mulai");

  const handlePenitipButtonClick = () => {
    navigate("/homeUser");
  };



  const handleMenuClick = (component, menu) => {
    setActiveComponent(component);
    setActiveMenu(menu);
  };

  const getMenuClass = (menu) =>
    activeMenu === menu
      ? "flex w-full justify-start items-center  gap-[13px] rounded-r-[20px] p-[10px] cursor-pointer bg-white text-colorPrimer font-black"
      : "flex w-full justify-start items-center  gap-[13px] rounded-r-[20px] p-[10px] cursor-pointer hover:bg-blue-900";

  return (
    <div className="">
      <div className="flex">
        <div className="sideMenu w-[200px] flex jusify-between gap-0 flex-col h-screen bg-colorSekunder">
          <div className="h-[70px] flex justify-start items-end font-[900] text-white">
            <div className="ml-[10px] mb-[10px] text-[20px]">JastipMama.</div>
          </div>
          <div className="Menu bg-colorSekunder w-full h-[100%]">
            <div className="">
              <div className="flex flex-col justify-center items-center mr-[10px] mt-[20px] gap-[10px] text-white">
                <div className="w-full ml-[10px] border-b-[1px] h-[30px]">
                  <div className="flex justify-start items-center gap-[13px] w-full mx-[6px]">
                    <div className="text-[23px]">
                      <RiMenuUnfold3Fill />
                    </div>
                    <div className="text-[12px] font-bold">Minimize</div>
                  </div>
                </div>
                <div
                  className={getMenuClass("Beranda")}
                  onClick={() => handleMenuClick(<StartComponent />, "Beranda")}
                >
                  <div className="text-[22px]">
                    <RxDashboard />
                  </div>
                  <div className="text-[12px]">Beranda</div>
                </div>
                <div
                  className={getMenuClass("Aktivitas")}
                  onClick={() => handleMenuClick(<AktivitasDriver />, "Aktivitas")}
                >
                  <div className="text-[22px]">
                    <RiFileListLine />
                  </div>
                  <div className="text-[12px]">Aktivitas</div>
                </div>
                <div
                  className={getMenuClass("Riwayat")}
                  onClick={() => handleMenuClick(<RiwayatComponent />, "Riwayat")}
                >
                  <div className="text-[22px]">
                    <RiHistoryLine />
                  </div>
                  <div className="text-[12px]">Riwayat</div>
                </div>
                <div
                  className={getMenuClass("Profile")}
                  onClick={() => handleMenuClick(<ProfileComponent />, "Profile")}
                >
                  <div className="text-[22px]">
                    <FaRegUserCircle />
                  </div>
                  <div className="text-[12px]">Profile</div>
                </div>
                <div
                  className={getMenuClass("Pengaduan")}
                  onClick={() => handleMenuClick(<PengaduanComponent />, "Pengaduan")}
                >
                  <div className="text-[22px]">
                    <FiAlertOctagon />
                  </div>
                  <div className="text-[12px]">Pengaduan</div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[80px] flex justify-center items-center">
            <div className="">
              <button
                onClick={handlePenitipButtonClick}
                className="size-full bg-white border-2 border-colorPrimer flex flex-row gap-[10px] justify-center items-center p-[6px] rounded-[20px]"
              >
                <div className="font-extrabold text-colorPrimer text-[12px]">Driver</div>
                <div className="circle w-6 h-6 rounded-full bg-colorPrimer"></div>
                
              </button>
            </div>
          </div>
        </div>
        <div className="Main w-[100%] h-screen bg-colorBackground">
          {activeComponent}
        </div>
      </div>
    </div>
  );
};

export default StartingJastip;
