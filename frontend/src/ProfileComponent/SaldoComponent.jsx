import React from "react";
import { LuWallet } from "react-icons/lu";

function SaldoComponent() {
  return (
    <div>
      <div className="w-full p-4 mr-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">Pembayaran</h2>
        <div className="bg-cyan-500 p-4 rounded-lg shadow-md mb-4">
          <h3 className="text-lg font-bold text-white">
            BIAYA ADMIN JASTIP MAMA YANG TERSEDIA
          </h3>
          <p className="text-4xl font-bold text-white">Rp47.850,00</p>
          <div className="flex items-center gap-[10px]">
            <img src="./src/assets/shoope.png" alt="shoope" />
            <img className='rounded-full shadow-black' src="./src/assets/dana.png" alt="dana" />
            <LuWallet />
          </div>
        </div>
        <h3 className="text-lg font-bold">Pilih metode pembayaran</h3>
        <button onClick="" className="flex items-center mt-2 font-bold text-black-500">
          <span className="material-icons"><LuWallet /></span>
          <span className="ml-2">Tambahkan Metode Pembayaran</span>
        </button>
        <hr className="border-t-2 border-gray-200 my-4" />
        <p className="text-gray-600 mt-2">
          Metode pembayaran akan diverifikasi dengan jumlah Rp10.000, jumlah ini
          akan segera dibatalkan/dikembalikan dan kamu tidak akan dikenakan
          biaya apapun.
        </p>
        <h3 className="text-lg font-bold mt-4">Metode Penambahan Alternatif</h3>
        <ul className="mt-2">
          <li className="flex items-center mb-2">
            <span className="material-icons">
              <img src="src/assets/shoope.png" alt="" />
            </span>
            <span className="ml-2">ShopeePay</span>
          </li>
          <hr className="border-t-2 border-gray-200 my-4" />
          <li className="flex items-center mb-2">
            <span className="material-icons">
              <img src="src/assets/dana.png" alt="" />
            </span>
            <span className="ml-2">Dana</span>
          </li>
          <hr className="border-t-2 border-gray-200 my-4" />
          <li className="flex items-center mb-2">
            <span className="material-icons">
              <img src="src/assets/qris.png" alt="" />
            </span>
            <span className="ml-2">QRIS</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SaldoComponent;
