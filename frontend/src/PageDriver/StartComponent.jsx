import React from 'react'
import { useNavigate } from "react-router-dom";

function StartComponent() {
  const navigate = useNavigate();
  return (
    <div className='w-'>
      <div className="w-[1200px] h-[400px] bg-white p-6 rounded-lg shadow-md text-center mt-2 ml-4 mb-6">
        <div className='w-[1000px] bg-blue-100'>
        </div>
      </div>
      <div className='bg-white p-6 rounded-lg shadow-md text-center mb-6'>
        <h1>Ayo bersiap-siap!</h1>
        <p>Daftar atau masuk fitur Dompetku untuk memulai  jastip.</p>
        <div className='flex justify-center item-center'>
        <button className='bg-colorPrimer w-[110px] text-white h-[35px] flex justify-center items-center rounded-full font-semibold pointer'
            onClick={() => navigate('/homeDriver/StartingJastip/InputNumber')}>ayo mulai</button>
        </div>    
      </div>
    </div>
  )
}

export default StartComponent