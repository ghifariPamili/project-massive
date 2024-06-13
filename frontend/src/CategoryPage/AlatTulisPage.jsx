import React from 'react'

function AlatTulisPage() {
  return (
    <div className='Main w-full h-screen bg-cyan-50 p-[10px]'>
      <div className='isi flex flex-col justify-between items-center gap-[10px] w-full h-full bg-cyan-50 p-[10px]' >
        <div className="iklan w-full rounded-[20px] h-full bg-cyan-300">
          <h1 className='text-[50px] font-bold text-center'>Mager?</h1>
          <p className='text-2xl font-bold text-center flex justify-center item-center'>Nitip mudah, murah dan terpercaya, yaa di Jastip MaMa</p>
          <p className='flex justify-center item-center'>Tunggu apalagi, yuk jastip sekarang di Jastip MaMa</p>
          <div className='flex justify-between'>
          <img src="./src/assets/rocket.png" alt="" />
          <img src="./src/assets/jastip.png" alt="" />
        </div>
        </div>
        <div className="kategori flex flex-row p-[10px] justify-start items-center gap-[30px] bg-transparent w-full h-[230px] ">
          <div className="kategori-items  ">
            <img src="./src/assets/gambarfood.png" alt=""  onClick={() => navigate('/homeUser/makanan')}  className='bg-gray-400 w-[80px] h-[80px] rounded-full'/>
            <div>Makanan</div>
          </div>
          <div className="kategori-items  ">
            <img src="./src/assets/atk.png" alt=""  className='bg-gray-400 w-[80px] h-[80px] rounded-full'/>
            <div>ATK</div>
          </div>
          <div className="kategori-items  ">
            <img src="./src/assets/laundry.png" alt=""  className='bg-gray-400 w-[80px] h-[80px] rounded-full'/>
            <div>Laundry</div>
          </div>
          <div className="kategori-items  ">
            <img src="./src/assets/obat.png" alt=""  className='bg-gray-400 w-[80px] h-[80px] rounded-full'/>
            <div>Obat</div>
          </div>
          <div className="kategori-items  ">
            <img src="./src/assets/skincare.png" alt=""  className='bg-gray-400 w-[80px] h-[80px] rounded-full'/>
            <div>Skincare</div>
          </div>
          <div className="kategori-items  ">
            <img src="./src/assets/etc.png" alt=""  className='bg-gray-400 w-[80px] h-[80px] rounded-full'/>
            <div>ETC</div>
          </div>
          </div>
          </div>
          </div>
  )
}

export default AlatTulisPage