import React from 'react';

function SectionEmpat() {
  return (
    <div className='Container text-blue-950 font-semibold flex overflow-hidden font'>
      <div className='Information h-screen w-[50%] bg-customCyan rounded-tr-[40px] '>
        <div className='InfoContainer size-[100%] flex flex-col items-center justify-start pt-[40px] gap-[40px] '>
          <div className='flex flex-col gap-[10px]'>
            <p className='text-[25px]'>Solusi Anti Mager buat Mahasiswa</p>
            <nav className='flex justify-between shadow-lg '>
              <a href="#"><div className='bg-colorPrimer w-[120px] shadow-lg h-[5px] rounded-full'></div></a>
              <a href="#"><div className='bg-white w-[120px] shadow-lg h-[5px] rounded-full'></div></a>
              <a href="#"><div className='bg-white w-[120px] shadow-lg h-[5px] rounded-full'></div></a>
            </nav>
          </div>
          <div className='ilustrasi'>
            <img src={Ilustrasi} alt="Ilustration" className=' w-[400px]' />
          </div>
        </div>
        <div>
            <img src="src/assets/Vector.png" alt="" />
            <h2>Berhasil membuat akun</h2>
            <p>Silahkan masuk ke akunmu untuk mulai mengakses website.</p>
            <button type='submit' className='bg-colorSekunder w-[130px] h-[40px] rounded-full text-[14px] font-normal text-white'>masuk</button>
        </div>
      </div>
    </div>
  );
};
export default SectionEmpat;