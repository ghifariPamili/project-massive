

import React from 'react';

function BerandaComptUser() {
  return (
    <div className="bg-blue-50 min-h-screen p-6">
      <Header />
      <CategoryIcons />
      <FeaturedServices />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-cyan-100 p-6 rounded-lg shadow-md text-center mb-6">
      <h1 className="text-2xl font-bold">Mager?</h1>
      <p>bukan masalahah, kami hadir membantu anda</p>
      <p className="mt-4 text-lg">Nitip mudah, murah dan terpercaya, yaa di Jastip MaMa</p>
      <p className="mt-2">Tunggu apalagi, yuk jastip sekarang di Jastip MaMa</p>
      <div className="mt-4 flex justify-center src/assets/">
        <img src="src/assets/rocket.png" alt="Illustration" className="w-16 h-16 mr-4"/>
        <img src="src/assets/jastip.png" alt="Clipboard" className="w-16 h-16"/>
      </div>
    </div>
  );
}

function CategoryIcons() {
  const categories = [
    { name: 'Makanan', icon: 'src/assets/gambarfood.png' },
    { name: 'ATK', icon: 'src/assets/atk.png' },
    { name: 'Laundry', icon: 'src/assets/laundry.png' },
    { name: 'Obat', icon: 'src/assets/obat.png' },
    { name: 'Skincare', icon: 'src/assets/skincare.png' },
    { name: 'etc', icon: 'src/assets/etc.png' }
  ];

  return (
    <div className="flex justify-around mb-6">
      {categories.map((category, index) => (
        <div key={index} className="flex flex-col items-center">
          <img src={category.icon} alt={category.name} className="w-12 h-12 mb-2 rounded-full"/>
          <p>{category.name}</p>
        </div>
      ))}
    </div>
  );
}

function FeaturedServices() {
  const services = [
    { name: 'Ayam Geprek', price: 'Rp 3,000' },
    { name: 'Mie Gacoan', price: 'Rp 3,200' },
    { name: 'Cemilan', price: 'Rp 2,500' }
  ];

  return (
    <div className="bg-cyan-100 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Jastip yang lagi ada ..</h2>
      <div className="flex justify-between items-center">
        <div className="w-1/2">
          {services.map((service, index) => (
            <div key={index} className="flex justify-between mb-2">
              <p>{service.name}</p>
              <p>{service.price}</p>
            </div>
          ))}
        </div>
        <div className="w-120 h-120 bg-white rounded-[20px] text-center">
          <p>Klik list jastip disamping untuk melihat detail jastip</p>
        </div>
      </div>
    </div>
  );
}

export default BerandaComptUser;