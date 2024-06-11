import React from 'react'
import { useNavigate } from "react-router-dom";

function InputComponent() {
  const navigate = useNavigate();
  return (
    <div className=''>
        <div className=''>
        <button className='bg-white text-black flex justify-center item-center rounded-full font-semibold pointer'
        onClick={() => navigate('/homeDriver/StartingJastip/InputNumber')}>masukkan no telpon</button>
        </div>
      <div className='w-full h-screen flex justify-center item-center'>
      <div className='w-[400px] h-[200px] bg-white p-6 rounded-lg shadow-md text-center mb-6'>
        <h1>Yuk kita mulai</h1>
        <p>Masukkan nomor teleponmu yang dipake di JasTip MaMa.</p>
        <label className='flex justify-star'>Nomor hp</label>
        <input type="text" 
        defaultValue=""
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        
        />
        <div className='flex justify-center item-center'>
        <button className='bg-cyan-200 w-[110px] text-black h-[35px] flex justify-center items-center rounded-full font-semibold pointer'
            onClick={() => navigate('/homeDriver/StartingJastip/InputNumber')}>Lanjutkan</button>
        </div>
        </div>    
      </div>
    </div>
  )
}

export default InputComponent