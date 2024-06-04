// HomePage.js
import React, { useState } from 'react';
import SideMenu from '../Components/SideMenu';
import BerandaDriver from '../PageDriver/BerandaDriver';
import AktivitasDriver from '../PageDriver/AktivitasDriver'
import RiwayatDriver from '../PageDriver/RiwayatDriver'
import BerandaUser from '../PagePenitip/BerandaUser';
import AktivitasPenitip from '../PagePenitip/AktivitasUser'
import RiwayatPenitip from '../PagePenitip/RiwayatUser'
import ProfileComponent from '../Components/ProfileComponent';
import PengaduanComponent from '../Components/PengaduanComponent';


function HomePage() {
  const [currentPage, setCurrentPage] = useState('penitip');

  const handleSwitchPage = () => {
    setCurrentPage((prevPage) => (prevPage === 'driver' ? 'penitip' : 'driver'));
  };

  return (
    <div className='flex h-screen'>
      <div>
        <SideMenu handleSwitchPage={handleSwitchPage} currentPage={currentPage} />
      </div>
      <div className='w-[100%]'>
        {currentPage === 'driver' ? <BerandaDriver /> : <BerandaUser />}
      </div>
    </div>
  );
}

export default HomePage;
