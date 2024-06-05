import React from 'react';

function BerandaComptUser() {
  return (
    <div className="min-h-screen bg-cyan-50 p-4">
      {/* Header */}
      <header className="flex justify-between items-center mb-4">
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

      {/* Jastip List */}
      <div className="bg-blue-200 p-4 rounded-lg">
        <h2 className="text-lg mb-4">Jastip yang lagi ada ..</h2>
        <div className="flex items-center">
          <button className="p-2 mr-4">&lt;</button>
          <div className="flex flex-col items-start">
            {[
              { name: 'Ayam Geprek', price: 'Rp 3.000' },
              { name: 'Mie Gacoan', price: 'Rp 3.000' },
              { name: 'Cemilan', price: 'Rp 2.500' },
            ].map((item, index) => (
              <div key={index} className="flex items-center mb-2 p-2 bg-#90E0EF rounded-full shadow-md w-64 justify-between">
                <span>{item.name}</span>
                <span>{item.price}</span>
              </div>
            ))}
          </div>
          <button className="p-2 ml-4">&gt;</button>
        </div>
        <div className="bg-white p-4 mt-4 rounded-lg shadow-md w-full text-center">
          Klik list jastip disamping untuk melihat detail jastip
        </div>
      </div>
    </div>
  );
}

export default BerandaComptUser;