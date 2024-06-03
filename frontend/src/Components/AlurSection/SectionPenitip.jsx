// SectionPenitip.jsx
import React from 'react';
import { MdOutlineComputer } from "react-icons/md";
import { GrCursor } from "react-icons/gr";
import { CiLocationOn } from "react-icons/ci";
import { BiLoaderCircle } from "react-icons/bi";
import { BsBodyText } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import { BsFileText } from "react-icons/bs";


function SectionPenitip() {
  return (
    <div className="flex text-black justify-between font-semibold mt-[40px]">
      <div className="flex flex-col gap-[15px] justify-center items-center">
        <div className='flex gap-[15px]'>
          <div className="p-4 bg-white flex gap-[10px] w-[350px] h-[70px] justify-start items-center bg-opacity-100 rounded-[30px] m-2">
            <div className='text-[34px] transform -scale-x-100'><MdOutlineComputer /></div>
            <div className='flex items-center justify-center w-[100%]'><p className="text-[14px] font-semibold">Buka jastip mama</p></div>
          </div>
          <div className="p-4 bg-white w-[350px] h-[70px] flex gap-[10px] justify-start items-center bg-opacity-100 rounded-[30px] m-2">
            <div className='text-[34px] transform -scale-x-100'><GrCursor /></div>
            <div className='flex items-center justify-center w-[100%]'><p className="text-[14px] font-semibold">Pilih kategori jastip</p></div>
          </div>
          <div className="p-4 bg-white w-[350px] h-[70px] flex gap-[10px] justify-start items-center bg-opacity-100 rounded-[30px] m-2">
            <div className='text-[34px] transform -scale-x-100'> <CiLocationOn /></div>
            <div className='flex items-center justify-center w-[100%]'><p className="text-[14px] font-semibold">Masukkan lokasi pengiriman jastip.</p></div>
          </div>
        </div>
        <div className='flex gap-[15px]'>
          <div className="p-4 bg-white w-[350px] h-[70px] flex gap-[10px] justify-start items-center bg-opacity-100 rounded-[30px] m-2">
            <div className='text-[34px] transform -scale-x-100'> <GrCursor /></div>
            <div className='flex items-center justify-center w-[100%]'><p className="text-[14px] font-semibold">Pilih jastip yang kamu inginkan berdasarkan list yang tersedia.</p></div>
          </div>
          <div className="p-4 bg-white w-[350px] h-[70px] flex gap-[10px] justify-start items-center bg-opacity-100 rounded-[30px] m-2">
            <div className='text-[34px] transform -scale-x-100'><BiLoaderCircle /></div>
            <div className='flex items-center justify-center w-[100%]'><p className="text-[14px] font-semibold">Tunggu konfirmasi transaksi dari driver.</p></div>
          </div>
          <div className="p-4 bg-white w-[350px] h-[70px] flex gap-[10px] justify-start items-center bg-opacity-100 rounded-[30px] m-2">
            <div className='text-[34px] transform -scale-x-100'><BsBodyText /></div>
            <div className='flex items-center justify-center w-[100%]'><p className="text-[14px] font-semibold">Lanjutkan detail pemesanan & nego harga di chat.</p></div>
          </div>
        </div>
        <div className='flex gap-[15px]'>
          <div className="p-4 bg-white w-[350px] h-[70px] flex gap-[10px] justify-start items-center bg-opacity-100 rounded-[30px] m-2">
            <div className='text-[34px] transform -scale-x-100'><MdPayment /></div>
            <div className='flex items-center justify-center w-[100%]'><p className="text-[14px] font-semibold">Tentukan cara pembayaranmu.</p></div>
          </div>
          <div className="p-4 bg-white w-[350px] h-[70px] flex gap-[10px] justify-start items-center bg-opacity-100 rounded-[30px] m-2">
            <div className='text-[34px] transform -scale-x-100'><BsFileText /></div>
            <div className='flex items-center justify-center w-[100%]'><p className="text-[14px] font-semibold">Konfirmasi & tunggu titipanmu diantar.</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionPenitip;
