import React from 'react'

function SectionAlatTulis() {
  return (
    <div className='w-full h-full bg-transparent-400 flex gap-[20px]'>
      <div className='w-[100px]'>
        <img src="./src/assets/atk.png" alt="" className='rounded-full' />
      </div>
      <div>
        <div className='w-[400px]'>
      <div className='w-1/2 bg-cyan-300 flex justify-between rounded-[20px] mb-2'>
        <p>Fotocopy</p>
        <p className='bg-white rounded-[20px]'>Rp1000</p>
        </div>
        <div className='w-1/2 bg-cyan-300 flex justify-between rounded-[20px] mb-2'>
        <p>Kertas Manila</p>
        <p className='bg-white rounded-[20px]'>Rp10000</p>
        </div>
        <div className='w-1/2 bg-cyan-300 flex justify-between rounded-[20px] mb-2'>
        <p>Print</p>
        <p className='bg-white rounded-[20px]'>Rp3000</p>
        </div>
        </div>
      </div>
      </div>
  )
}

export default SectionAlatTulis