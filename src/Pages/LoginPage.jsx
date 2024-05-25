import React from 'react';
// import '../All.css';
// import LogoOnly from '../assets/LogoOnly.png'

const LoginPage = () => {
  return (
    <div className='Container text-blue-950 font-semibold flex overflow-hidden font'>
      <div className='Information h-screen w-[50%] bg-customCyan rounded-tr-[40px] '>
        <div className='InfoContainer size-[100%] flex flex-col items-start justify-center px-[90px] gap-[80px] '>
          <div>
            <h1 className='text-[40px] font-bold'>Selamat datang<br/> di komunitas kami</h1>
            <p>Ingat Mahasiswa, Ingat JasTip MaMa.</p>
          </div>
          <div className='Review flex flex-col gap-[30px]'>
            <div className='IsiReview'>
            <div className='StarRating '>
                <span className='text-colorRating text-[22px] ' >&#9733;&#9733;&#9733;&#9733;&#9733;</span> 
            </div>
            <p>"Coba ini, bro/sis! Nih, website baru ini bakal bikin hidupmu makin asyik! Bukan cuma nambahin keren-kerenan layanan kita, tapi juga nyelesin masalah-masalah yang sering nyebelin pas lagi titip-titipan antar mahasiswa. Yuk, langsung cek dan rasain manfaatnya!"</p>
            </div>
            <div className='flex gap-[20px] '>
              <img src="" alt="" className='bg-gray-300 w-[40px] h-[40px] rounded-full' />
              <div className='informationReviewer flex flex-col'>
                <a href="#" className='text-[12px] '>Jessice</a>
                <a href="#" className='text-[12px] '>Mahasiswi Teknik, 2021</a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[421.23px] h-[512.45px] left-[-100.45px] top-[-431.42px] absolute origin-top-left rotate-[37.21deg] opacity-10 rounded-full border-8 border-blue-950" />
      </div>
      <div className='formIsi h-screen w-[50%] bg-white z-10'>
        <div className=' ml-[30px] h-screen w-[100%] bg-red-500 flex flex-col items-start justify-center gap-[30px] '>
          <div className='flex flex-col'>
            <h1 className='text-[40px] font-bold'>Selamat datang kembali!</h1>
            <p>Ingat Mahasiswa, Ingat JasTip MaMa.</p>
          </div>
          <div className=''>
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" className="border border-gray-300 rounded-full p-2" />
            </div>
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="password">Kata Sandi:</label>
              <input type="password" id="password" className="border border-gray-300 rounded-full p-2" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
export default LoginPage;
