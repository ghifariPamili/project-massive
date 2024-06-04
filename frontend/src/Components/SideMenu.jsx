// SideMenu.js
import React from "react";
import { RxDashboard } from "react-icons/rx";
import { RiMenuUnfold3Fill } from "react-icons/ri";
import { RiFileListLine } from "react-icons/ri";
import { RiHistoryLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { FiAlertOctagon } from "react-icons/fi";
import ButtonSwitch from "./ButtonSwitch";

function SideMenu({ handleSwitchPage, currentPage }) {
  return (
    <div className="flex flex-col bg-colorSekunder w-[200px] h-screen">
      <div className="Logo bg-gray-300 w-full h-[80px] "></div>
      <div className="Menu bg-colorSekunder w-full h-[100%] ">
        <div className="">
          <div className="flex flex-col justify-center items-center mx-[10px] mt-[20px] gap-[20px] text-white">
            <div className="w-full border-b-[2px] h-[30px]">
              <div className="flex justify-start items-center gap-[13px] w-full">
                <div className="text-[24px]">
                  <RiMenuUnfold3Fill />
                </div>
                <div className="text-[14px] font-bold">Minimize</div>
              </div>
            </div>
            <div className="flex w-full justify-start items-center gap-[13px]">
              <div className="text-[22px]">
                <RxDashboard />
              </div>
              <div className="text-[14px]">Beranda</div>
            </div>
            <div className="flex w-full justify-start items-center gap-[13px]">
              <div className="text-[22px]">
                <RiFileListLine />
              </div>
              <div className="text-[14px]">Aktivitas</div>
            </div>
            <div className="flex w-full justify-start items-center gap-[13px]">
              <div className="text-[22px]">
                <RiHistoryLine />
              </div>
              <div className="text-[14px]">Riwayat</div>
            </div>
            <div className="flex w-full justify-start items-center gap-[13px]">
              <div className="text-[22px]">
                <FaRegUserCircle />
              </div>
              <div className="text-[14px]">Profile</div>
            </div>
            <div className="flex w-full justify-start items-center gap-[13px]">
              <div className="text-[22px]">
                <FiAlertOctagon />
              </div>
              <div className="text-[14px]">Pengaduan</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[60px] flex justify-start items-center ml-[5px] "> <ButtonSwitch onClick={handleSwitchPage} currentPage={currentPage} /> </div>
    </div>
  );
}

export default SideMenu;
