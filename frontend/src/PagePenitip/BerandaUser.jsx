import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { RiMenuUnfold3Fill } from "react-icons/ri";
import { RiFileListLine } from "react-icons/ri";
import { RiHistoryLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { FiAlertOctagon } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

// Import your components
import AktivitasUser from './AktivitasUser';
import BerandaCompUser from './BerandaComptUser';
import RiwayatComponent from './RiwayatUser';
import ProfileComponent from '../Components/ProfileComponent';
import PengaduanComponent from '../Components/PengaduanComponent';

const BerandaUser = () => {
  const navigate = useNavigate();
  const [activeComponent, setActiveComponent] = useState(<BerandaCompUser />);
  const [activeMenu, setActiveMenu] = useState("Beranda");

  const handlePenitipButtonClick = () => {
    navigate("/homeDriver");
  };

  const handleMenuClick = (component, menu) => {
    setActiveComponent(component);
    setActiveMenu(menu);
  };

  const getMenuClass = (menu) =>
    activeMenu === menu
      ? "flex w-full justify-start items-center gap-[13px] rounded-r-[20px] py-[10px] cursor-pointer bg-colorPrimer"
      : "flex w-full justify-start items-center gap-[13px] rounded-r-[20px] py-[10px] cursor-pointer hover:bg-blue-900";

  return (
    <div>
      <div className="flex">
        <div className="sideMenu w-[250px] flex jusify-between gap-0 flex-col h-screen bg-colorSekunder">
          <div className="h-[70px] flex justify-start items-end font-[900] text-white">
            <div className="ml-[10px] mb-[10px] text-[20px]">JastipMama.</div>
          </div>
          <div className="Menu bg-colorSekunder w-full h-[100%]">
            <div className="">
              <div className="flex flex-col justify-center items-center mr-[10px] mt-[20px] gap-[10px] text-white">
                <div className="w-full border-b-[2px] h-[30px]">
                  <div className="flex justify-start items-center gap-[13px] w-full">
                    <div className="text-[24px]">
                      <RiMenuUnfold3Fill />
                    </div>
                    <div className="text-[14px] font-bold">Minimize</div>
                  </div>
                </div>
                <div
                  className={getMenuClass("Beranda")}
                  onClick={() => handleMenuClick(<BerandaCompUser />, "Beranda")}
                >
                  <div className="text-[22px]">
                    <RxDashboard />
                  </div>
                  <div className="text-[14px]">Beranda</div>
                </div>
                <div
                  className={getMenuClass("Aktivitas")}
                  onClick={() => handleMenuClick(<AktivitasUser />, "Aktivitas")}
                >
                  <div className="text-[22px]">
                    <RiFileListLine />
                  </div>
                  <div className="text-[14px]">Aktivitas</div>
                </div>
                <div
                  className={getMenuClass("Riwayat")}
                  onClick={() => handleMenuClick(<RiwayatComponent />, "Riwayat")}
                >
                  <div className="text-[22px]">
                    <RiHistoryLine />
                  </div>
                  <div className="text-[14px]">Riwayat</div>
                </div>
                <div
                  className={getMenuClass("Profile")}
                  onClick={() => handleMenuClick(<ProfileComponent />, "Profile")}
                >
                  <div className="text-[22px]">
                    <FaRegUserCircle />
                  </div>
                  <div className="text-[14px]">Profile</div>
                </div>
                <div
                  className={getMenuClass("Pengaduan")}
                  onClick={() => handleMenuClick(<PengaduanComponent />, "Pengaduan")}
                >
                  <div className="text-[22px]">
                    <FiAlertOctagon />
                  </div>
                  <div className="text-[14px]">Pengaduan</div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[60px] flex justify-start items-center">
            <div className="ml-[10px]">
              <button
                onClick={handlePenitipButtonClick}
                className="size-full bg-colorPrimer border-2 border-colorPrimer flex flex-row gap-[10px] justify-center items-center p-2 rounded-[20px]"
              >
                <div className="circle w-5 h-5 rounded-full bg-white"></div>
                <div className="font-semibold text-white text-[14px]">Penitip</div>
              </button>
            </div>
          </div>
        </div>
        <div className="Main w-[100%] h-screen bg-red-500">
          {activeComponent}
        </div>
      </div>
    </div>
  );
};

export default BerandaUser;
