import React from 'react'
import { ImArrowUpRight2 } from "react-icons/im";
import IllustrasiDriver from "../assets/IlustrasiDriver.png"

function BerandaCompDriver() {
  return (
    <div className='w-full bg-colorBackground'>
      <div className='flex h-screen '>
      <div className='Img flex justify-center items-center w-[45%]'>
        <img src={IllustrasiDriver} alt="Ilustrasi" />
      </div>
      <div className='Isi flex flex-col justify-center gap-[10px] w-[55%] pr-[50px]'>
        
        <div className="title text-[40px] font-black pr-[20px]">
          <div className='Greeting text-[14px] text-blueGray500 font-medium'>Hello, User</div>
          <div>Bersama JasTip MaMa, potongan cuan 5% per ongkir, udah bisa mandi untung. Ga percaya? Buktiin aja! </div>
        </div>
        <div className='Cerita gap-[20px] text-[14px] font-medium'>
          <div>“JasTip MaMa, sahabat terbaik mahasiswa! Dengan integrasi lewat satu aplikasi, saya sudah bisa buka jasa ini itu, potongan biaya admin yang ramah di kantong, sama-sama bikin untung!”</div>
          <div className='flex gap-[10px] text-[10px]'>
            <div className='font-extrabold'>arif</div>
            <div className='font-medium text-blueGray500'>Mahasiswa FIKOM UB, 2021</div>
          </div>
        </div>
        <div className='Button flex flex-row justify-between mt-[40px] pl-[30px] pr-[50px] font-medium text-[12px]'>
          <div>
            <a href="#" className='bg-white w-[230px] text-colorSekunder gap-[10px] h-[35px] flex justify-center items-center rounded-full font-semibold '>
              <div className='text-[12px]'>Baca Studi kasus lengkap</div>
              <div><ImArrowUpRight2 /></div>
            </a>
          </div>
          <div>
            <div className='bg-colorPrimer w-[110px] text-white h-[35px] flex justify-center items-center rounded-full font-semibold '>Buka Jastip</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default BerandaCompDriver