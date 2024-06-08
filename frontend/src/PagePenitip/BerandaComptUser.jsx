

import React from 'react';

function BerandaComptUser() {
  return (
    <div className="min-h-screen bg-cyan-50 p-4">
      {/* Header */}
      <header className="flex justify-center gap-[80px] items-center mb-4">
        <div className="bg-cyan-200 w-1/3 h-32 rounded-lg border-2 border-black"></div>
        <div className="bg-cyan-200 w-1/3 h-32 rounded-lg border-2 border-black"></div>
      </header>

      {/* Categories */}
      <div className="flex justify-around mb-4">
        {['Makanan', 'ATK', 'Laundry', 'Obat', 'Skincare', 'etc'].map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-2 shadow-md">
              {/* Replace with actual icons */}
              <span className="text-lg">{category[0]}</span>
            </div>
            <span className="text-sm">{category}</span>
          </div>
        ))}
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