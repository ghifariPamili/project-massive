import React from 'react'
import { IoWallet } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { FiEdit3 } from "react-icons/fi";
import { BiHistory } from "react-icons/bi";
import IlustrasiDriver2 from '../assets/IlustrasiDriver2.png'
import { ImSpoonKnife } from "react-icons/im";

function AktivitasDriver() {
  return (
    <div className='flex justify-center items-center'>
       <div className='flex justify-center items-center w-full h-screen p-[25px]'>
        <div className='bg-white flex justify-center p-[20px]  w-full h-full rounded-[30px]'>
          <div className='IsiKiri w-[70%]  px-[10px]'>
            <div className='Header flex flex-col gap-[20px]'>
              <div className='flex gap-[20px] justify-start items-center'>
                <div className=' bg-white flex flex-row gap-[5px] justify-center items-center border-[1px] border-colorSekunder w-[400px] p-[6px] rounded-[20px]' >
                  <div><IoLocationSharp size={'23px'} className='text-colorSekunder' /></div>
                  <input type="text" name="" id="" placeholder='Lokasi Anda' className='w-full h-full focus:outline-none text-[12px] text-black placeholder:text-black' />
                </div>
                <div>
                  <button className='bg-customCyan rounded-[8px] p-[9px]'>
                  <FiEdit3 size={'20px'} />
                  </button>
                </div>
              </div>
              <div className='flex flex-row gap-[10px] justify-start items-center'>
                <div>
                  <button className='bg-customCyan rounded-[12px] p-[9px]'>
                  <BiHistory size={'20px'}/>
                  </button>
                </div>
                <div>
                  <div className='text-[20px] font-bold'>Perjalanan Terkini</div>
                </div>
              </div>
            </div>
            {/* <div className='map bg-basePrimary rounded-[20px] flex flex-col gap-[10px]  h-[200px] m-[20px] p-[10px]'>
              <div className='Product flex flex-row justify-start items-center gap-[10px] h-[40px] p-[5px]'>
                <div className='mark bg-blue-400 h-[17px] w-[4px] rounded-[10px] '></div>
                <div className='IsiList p-[5px] h-full w-full flex flex-row justify-between items-center text-[13px] font-semibold '>
                  <div>
                    <button className='bg-customCyan rounded-[8px] p-[4px]'>
                    <ImSpoonKnife size={'20px'} />
                    </button>
                  </div>
                  
                    <div className="title">
                      Gacoan Dinoyo
                    </div>
                    <div className="date text-gray-400">
                      2024-05-21 - 18.00
                    </div>
                  
                  <div>
                    <button className="items bg-white  border-1 border-blue-300 rounded-[10px] p-[2px]">
                      3 Km...Rp8k
                    </button>
                  </div>
                </div>
              </div>
              <div className='Mapping bg-blueGray300 h-full w-full flex justify-center items-center rounded-[20px]'>
                Map
              </div>
            </div> */}
            <div className='list bg-basePrimary rounded-[20px] flex flex-col gap-[20px] h-[210px] m-[20px] p-[5px]'>
              <div>
                <div className='Product  flex flex-row justify-start items-center gap-[10px] h-[40px] p-[5px]'>
                  <div className='mark bg-blue-400 h-[6px] w-[6px] rounded-[10px] '></div>
                  <div className='IsiList p-[5px] h-full w-full flex flex-row justify-between items-center gap-[20px] text-[13px] font-semibold '>
                  <div>
                    <button className='bg-customCyan rounded-[8px] p-[4px]'>
                    <ImSpoonKnife size={'20px'} />
                    </button>
                  </div>
                  
                    <div className="title">
                      Gacoan Dinoyo
                    </div>
                    <div className="date text-gray-400">
                      2024-05-21 - 18.00
                    </div>
                  
                  <div>
                    <button className="items bg-white  border-1 border-blue-300 rounded-[10px] p-[2px]">
                      3 Km...Rp8k
                    </button>
                  </div>
                </div>
                </div>
                <div className='Product  flex flex-row justify-start items-center gap-[10px] h-[40px] p-[5px]'>
                  <div className='mark bg-blue-400 h-[6px] w-[6px] rounded-[10px] '></div>
                  <div className='IsiList p-[5px] h-full w-full flex flex-row justify-between items-center gap-[20px] text-[13px] font-semibold '>
                  <div>
                    <button className='bg-customCyan rounded-[8px] p-[4px]'>
                    <ImSpoonKnife size={'20px'} />
                    </button>
                  </div>
                  
                    <div className="title">
                      Gacoan Dinoyo
                    </div>
                    <div className="date text-gray-400">
                      2024-05-21 - 18.00
                    </div>
                  
                  <div>
                    <button className="items bg-white  border-1 border-blue-300 rounded-[10px] p-[2px]">
                      3 Km...Rp8k
                    </button>
                  </div>
                </div>
                </div>
                <div className='Product  flex flex-row justify-start items-center gap-[10px] h-[40px] p-[5px]'>
                  <div className='mark bg-blue-400 h-[6px] w-[6px] rounded-[10px] '></div>
                  <div className='IsiList p-[5px] h-full w-full flex flex-row justify-between items-center gap-[20px] text-[13px] font-semibold '>
                  <div>
                    <button className='bg-customCyan rounded-[8px] p-[4px]'>
                    <ImSpoonKnife size={'20px'} />
                    </button>
                  </div>
                  
                    <div className="title">
                      Gacoan Dinoyo
                    </div>
                    <div className="date text-gray-400">
                      2024-05-21 - 18.00
                    </div>
                  
                  <div>
                    <button className="items bg-white  border-1 border-blue-300 rounded-[10px] p-[2px]">
                      3 Km...Rp8k
                    </button>
                  </div>
                </div>
                </div>
                <div className='Product  flex flex-row justify-start items-center gap-[10px] h-[40px] p-[5px]'>
                  <div className='mark bg-blue-400 h-[6px] w-[6px] rounded-[10px] '></div>
                  <div className='IsiList p-[5px] h-full w-full flex flex-row justify-between items-center gap-[20px] text-[13px] font-semibold '>
                  <div>
                    <button className='bg-customCyan rounded-[8px] p-[4px]'>
                    <ImSpoonKnife size={'20px'} />
                    </button>
                  </div>
                  
                    <div className="title">
                      Gacoan Dinoyo
                    </div>
                    <div className="date text-gray-400">
                      2024-05-21 - 18.00
                    </div>
                  
                  <div>
                    <button className="items bg-white  border-1 border-blue-300 rounded-[10px] p-[2px]">
                      3 Km...Rp8k
                    </button>
                  </div>
                </div>
                </div>
                <div className='Product  flex flex-row justify-start items-center gap-[10px] h-[40px] p-[5px]'>
                  <div className='mark bg-blue-400 h-[6px] w-[6px] rounded-[10px] '></div>
                  <div className='IsiList p-[5px] h-full w-full flex flex-row justify-between items-center gap-[20px] text-[13px] font-semibold '>
                  <div>
                    <button className='bg-customCyan rounded-[8px] p-[4px]'>
                    <ImSpoonKnife size={'20px'} />
                    </button>
                  </div>
                  
                    <div className="title">
                      Gacoan Dinoyo
                    </div>
                    <div className="date text-gray-400">
                      2024-05-21 - 18.00
                    </div>
                  
                  <div>
                    <button className="items bg-white  border-1 border-blue-300 rounded-[10px] p-[2px]">
                      3 Km...Rp8k
                    </button>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className='IsiKanan gap-[10px] flex flex-col justify-start items-center px-[20px] w-[30%]'>
            <div className="Dompet flex flex-col justify-center items-center  bg-basePrimary w-[250px] p-[20px] rounded-[20px]">
              <div className='text-colorPrimer'><IoWallet size={'120px'} /></div>
              <div className="isiDompet w-full flex flex-col items-center bg-white rounded-[20px]">
                <div className='text-[18px] font-semibold text-gray-400'>Rp</div>
                <div className='text-[32px] font-black'>0</div>
                <div  className='text-[18px] font-semibold text-gray-400'>Dompet</div>
              </div>
            </div>
            <div className="ilustasi "><img src={IlustrasiDriver2} alt="Ilustrasi" className='size-[200px]' /></div>
            <div className="button">
              <button className='bg-colorPrimer flex flex-row gap-[8px] justify-center items-center text-[12px] rounded-[20px] py-[8px] px-[10px] text-white'>
                <div className='font-bold'>Gaskeun</div>
                <div><FaArrowRightLong /></div>
              </button>
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default AktivitasDriver