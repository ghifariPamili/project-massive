import React, { useState } from "react";
import PasswordComponent from "./PasswordComponent";
import SaldoComponent from "./SaldoComponent";
import MainProfile from "./MainProfile";

function ProfileComponent() {
  const [selectedComponent, setSelectedComponent] = useState("mainProfile");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "password":
        return <PasswordComponent />;
      case "saldo":
        return <SaldoComponent />;
      case "mainProfile":
      default:
        return <MainProfile />;
    }
  };

  return (
    <div className="h-screen bg-blue-50 flex flex-row">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white p-4 rounded-lg shadow-md">
        <div className="flex flex-col items-center">
          <img
            src="" // Replace with actual profile picture URL
            alt="3"
            className="w-24 bg-blue-100 h-24 rounded-full object-cover"
          />
          <h2 className="mt-4 text-lg font-semibold">Hai </h2>
          <nav className="mt-8 text-[16px] w-full">
            <ul>
              <li
                className="flex items-center p-2 mt-4 hover:bg-blue-100 rounded cursor-pointer"
                onClick={() => setSelectedComponent("mainProfile")}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.121 12.121A5.001 5.001 0 0012 7h.041A5.001 5.001 0 0018 12.041V12a5 5 0 00-5-5h-.042A5.002 5.002 0 0012 5a5 5 0 00-6.879 7.121zM5 18v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 00-2-2H7a2 2 0 00-2 2z"
                  ></path>
                </svg>
                <span className="text-[14px]">Informasi Pribadi</span>
              </li>
              <li
                className="flex items-center p-2 mt-4 hover:bg-blue-100 rounded cursor-pointer"
                onClick={() => setSelectedComponent("password")}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 11V7a5 5 0 00-10 0v4M12 14v7m5-5a2 2 0 11-4 0 2 2 0 014 0zm-7 0a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
                <span className="text-[14px]">Masuk & Kata Sandi</span>
              </li>
              <li
                className="flex items-center p-2 mt-4 hover:bg-blue-100 rounded cursor-pointer"
                onClick={() => setSelectedComponent("saldo")}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 11V7a5 5 0 00-10 0v4M12 14v7m5-5a2 2 0 11-4 0 2 2 0 014 0zm-7 0a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
                <span className="text-[14px]">Biaya Admin</span>
              </li>
              <li className="flex items-center p-2 mt-4 hover:bg-blue-100 rounded cursor-pointer">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
                <span className="text-[14px]">Keluar</span>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <main className="Main bg-colorBackground h-full w-full p-4">
        {renderComponent()}
      </main>
    </div>
  );
}

export default ProfileComponent;
