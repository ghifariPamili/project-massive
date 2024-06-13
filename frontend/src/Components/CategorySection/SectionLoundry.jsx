import React from 'react'

function SectionLoundry() {
  return (
    <div className='w-full h-full bg-transparent-400 flex gap-[20px]'>
      <div className='w-[100px] '>
        <img src="./src/assets/laundry.png" alt="" className='rounded-full'/>
      </div>
        <div className="w-[400px]">
        <div className='w-1/2 bg-cyan-300 flex justify-between rounded-[20px] mb-2'>
        <p>cuci basah</p>
        <p className='bg-white rounded-[20px]'>Rp8500</p>
        </div>
        <div className='w-1/2 bg-cyan-300 flex justify-between rounded-[20px] mb-2'>
        <p>cuci kering</p>
        <p className='bg-white rounded-[20px]'>Rp6500</p>
        </div>
        <div className='w-1/2 bg-cyan-300 flex justify-between rounded-[20px] mb-2'>
        <p>setrika</p>
        <p className='bg-white rounded-[20px]'>Rp5000</p>
        </div>
      </div>
    </div>
  )
}

export default SectionLoundry