import React from 'react';

function Pencarian() {
    const FoodCategory = () => {
      return (
        <div className="flex flex-col h-screen bg-blue-50 p-4">
          <div className="flex items-center mb-4">
            <button className="p-2 bg-white rounded-full shadow-md">
              <span className="material-icons">arrow_back</span>
            </button>
            <h1 className="text-xl font-semibold ml-4">Kategori Makanan</h1>
          </div>
          <div className="flex justify-center mb-8">
            <div className="relative w-3/4">
              <input 
                type="text" 
                placeholder="Masukkan lokasi kamu" 
                className="w-full p-4 pl-12 border border-gray-300 rounded-full bg-blue-100"
              />
              <span className="absolute left-4 top-4 material-icons text-gray-500">location_on</span>
              <button className="absolute right-4 top-4 material-icons text-gray-500">search</button>
            </div>
          </div>
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Jastip yang lagi ada ..</h2>
            <div className="flex items-center w-full mb-4">
              <button className="p-2 bg-blue-100 rounded-full shadow-md">
                <span className="material-icons">fastfood</span>
              </button>
              <div className="flex-1 flex overflow-x-scroll py-2">
                <div className="flex space-x-4">
                  <div className="flex flex-col items-center bg-blue-100 p-2 rounded-full">
                    <span>Ayam Geprek</span>
                    <span className="text-sm text-gray-500">Rp 3.000</span>
                  </div>
                  <div className="flex flex-col items-center bg-blue-100 p-2 rounded-full">
                    <span>Mie Gacoan</span>
                    <span className="text-sm text-gray-500">Rp 3.000</span>
                  </div>
                  <div className="flex flex-col items-center bg-blue-100 p-2 rounded-full">
                    <span>Cemilan</span>
                    <span className="text-sm text-gray-500">Rp 2.500</span>
                  </div>
                </div>
              </div>
              <button className="p-2 bg-blue-100 rounded-full shadow-md">
                <span className="material-icons">arrow_forward</span>
              </button>
            </div>
            <div className="w-full text-center text-gray-500">
              Klik list jastip disamping untuk melihat detail jastip
            </div>
          </div>
        </div>
      );
}};

export default Pencarian;
