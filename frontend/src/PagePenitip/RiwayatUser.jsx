import React from 'react';

function RiwayatUser() {
  return (
    <div className="min-h-screen bg-cyan-50 flex flex-col items-center justify-center p-4">
      {/* Image */}
      <img src="path/to/your/image.png" alt="404 Page Not Found" className="w-40 h-40 mb-4" />

      {/* Text */}
      <p className="text-center text-gray-700 mb-4">
        Tidak ada catatan jastip yang tersimpan untuk akun Anda
      </p>

      {/* Button */}
      <button className="bg-blue-300 text-black py-2 px-4 rounded-full shadow-md hover:bg-blue-400 transition duration-300">
        Mulai Cari Jastip
      </button>
    </div>
  );
}

export default RiwayatUser;
