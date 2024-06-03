// HomePage.js
import React, { useState } from 'react';
import SideMenu from '../Components/SideMenu';
import PageDriver1 from '../PageDriver/PageDriver1';
import PageUser1 from '../PagePenitip/PageUser1';

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
        {currentPage === 'driver' ? <PageDriver1 /> : <PageUser1 />}
      </div>
    </div>
  );
}

export default HomePage;
