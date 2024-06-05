import React from 'react';

function AktivitasUser() {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center p-4">
      {/* Image */}
      <img src="assets/ilustrasiaktivitas.png" alt="aktivitas" width="40" height="60"/>

      {/* Text */}
      <p className="text-center text-gray-700 mb-4">
        Tidak ada aktivitas jastip yang sedang kamu lakukan saat ini
      </p>

      {/* Button */}
      <button className="bg-blue-300 text-black py-2 px-4 rounded-full shadow-md hover:bg-blue-400 transition duration-300">
        Cari Jastip
      </button>
    </div>
  );
}

export default AktivitasUser;
