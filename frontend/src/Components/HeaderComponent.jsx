import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderComponent = () => {
  const navigate = useNavigate();
  
  const handleNavigation = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="header-nav fixed top-0 left-0 w-full p-4 bg-transparant text-[16px] shadow-md z-50">
      <div className='flex items-center justify-between gap-[70px]'>
        <div className='flex space-x-2'>
          <button 
            className="px-4 py-2 rounded text-blue-950 font-semibold hover:text-white bg-transparent"
            onClick={() => handleNavigation('heros')}>
              Beranda
          </button>
          <button 
            className="px-4 py-2 rounded text-blue-950 font-semibold hover:text-white bg-transparent"
            onClick={() => handleNavigation('fitur')}>
              Fitur
          </button>
          <button 
            className="px-4 py-2 rounded text-blue-950 font-semibold hover:text-white bg-transparent"
            onClick={() => handleNavigation('alur')}>
              Alur
          </button>
          <button 
            className="px-4 py-2 rounded text-blue-950 font-semibold hover:text-white bg-transparent"
            onClick={() => handleNavigation('layanan')}>
              Layanan
          </button>
        </div>
        <div className="logo text-2xl font-bold text-blue-950" 
        onClick={() => handleNavigation('about')}>jastipMama.</div>
        <div className="nav-buttons flex space-x-6">
          <button 
            className="px-4 py-2 rounded-[40px] border-[3px] border-blue-950 w-[125px] bg-transparent text-blue-950 font-semibold"
            onClick={() => navigate('/login')}>
            Masuk
          </button>
          <button className="px-4 py-2 rounded-[40px] w-[125px] bg-blue-950 text-white font-medium"
            onClick={() => navigate('/register')}>
            Daftar
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
