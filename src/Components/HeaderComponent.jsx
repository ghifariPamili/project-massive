import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="header-nav flex items-center justify-between gap-[70px] w-full p-4 bg-gray-800 text-white text-[16px]">
      <div className="logo text-2xl font-bold">jastipMama.</div>
      <div className='flex space-x-2'>
        <button className="px-4 py-2 rounded text-white bg-transparent">
            Beranda
        </button>
        <button className="px-4 py-2 rounded text-white bg-transparent">
            Fitur
        </button>
        <button className="px-4 py-2 rounded text-white bg-transparent">
            Alur
        </button>
        <button className="px-4 py-2 rounded text-white bg-transparent">
            Layanan
        </button>
      </div>
      
      <div className="nav-buttons flex space-x-6">
        <button 
          className="px-4 py-2 rounded-[40px] border-[2px] border-blue-500 w-[125px] bg-transparant text-blue-500 font-medium"
          onClick={() => navigate('/login')}>
          Masuk
        </button>
        <button className="px-4 py-2 rounded-[40px] w-[125px] bg-blue-500 text-white font-medium">
          Daftar
        </button>
      </div>
    </div>
  );
};

export default HeaderComponent;
