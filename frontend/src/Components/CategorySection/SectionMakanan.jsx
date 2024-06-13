import React from 'react'

function SectionMakanan() {
  return (
    <div className='w-full h-full bg-transparent-200 flex gap-[20px]'>
      <div className='w-[100px] ' ><img src="./src/assets/gambarfood.png" alt="" className='rounded-full' /></div>
        <div className="w-[400px]">
        <div className='w-1/2 bg-cyan-300 flex justify-between rounded-[20px] mb-2'>
        <p>Ayam geprek</p>
        <p className='bg-white rounded-[20px]'>Rp10000</p>
        </div>
        <div className='w-1/2 bg-cyan-300 flex justify-between rounded-[20px] mb-2'>
        <p>Mie Gacoan</p>
        <p className='bg-white rounded-[20px]'>Rp10000</p>
        </div>
        <div className='w-1/2 bg-cyan-300 flex justify-between rounded-[20px] mb-2'>
        <p>Cemilan</p>
        <p className='bg-white rounded-[20px]'>Rp10000</p>
        </div>
      </div>
      </div>
  )
}

export default SectionMakanan