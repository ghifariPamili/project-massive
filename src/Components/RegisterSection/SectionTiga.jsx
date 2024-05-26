import React, { useState } from 'react';
import axios from 'axios';
import Ilustrasi from '/home/user/project-massive/src/assets/ilustasi2.png';

const SectionTiga = ({ goToSection }) => {
  const [formData, setFormData] = useState({
    nim: '',
    email: '',
    password: '',
    confirm: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirm) {
      alert("Kata sandi tidak cocok");
      return;
    }
    try {
      await axios.post('http://localhost:5000/register', formData);
      alert("Registrasi berhasil!");
      goToSection(1); // atau arahkan ke halaman lain
    } catch (error) {
      console.error('Ada kesalahan!', error);
    }
  };

  return (
    <div className='Container text-blue-950 font-semibold flex overflow-hidden font'>
      <div className='Information h-screen w-[50%] bg-customCyan rounded-tr-[40px] '>
        <div className='InfoContainer size-[100%] flex flex-col items-center justify-start pt-[40px] gap-[40px] '>
          <div className='flex flex-col gap-[10px]'>
            <p className='text-[25px]'>Solusi Anti Mager buat Mahasiswa </p>
            <nav className='flex justify-between shadow-lg '>
              <a href="#"><div className='bg-colorPrimer w-[120px] shadow-lg h-[5px] rounded-full'></div></a>
              <a href="#"><div className='bg-colorPrimer w-[120px] shadow-lg h-[5px] rounded-full'></div></a>
              <a href="#"><div className='bg-colorPrimer w-[120px] shadow-lg h-[5px] rounded-full'></div></a>
            </nav>
          </div>
          <div className='ilustrasi'>
            <img src={Ilustrasi} alt="Ilustration" className=' w-[400px]' />
          </div>
        </div>
        <div className="w-[421.23px] h-[512.45px] left-[-100.45px] top-[-431.42px] absolute origin-top-left rotate-[37.21deg] opacity-10 rounded-full border-8 border-blue-950" />
      </div>
      <div className='formIsi h-screen w-[50%] bg-white z-10'>
        <form onSubmit={handleSubmit} className=' h-screen w-[100%] flex flex-col items-center justify-center gap-[40px] px-[40px] '>
          <div className='flex flex-col w-[100%]'>
            <h1 className='text-[40px] font-bold'>Bergabunglah dengan kami</h1>
            <p>Ingat Mahasiswa, Ingat JasTip MaMa.</p>
          </div>
          <div className='w-[100%] text-[13px] flex flex-col gap-[10px] '>
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="nim">Nomor induk Mahasiswa (NIM)</label>
              <input type="text" id="nim" value={formData.nim} onChange={handleChange} className="border border-blueGray300 bg-blueGray50 rounded-[9px] p-2 w-[100%] pl-[10px] pr-[10px]" />
            </div>
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="email">Email Anda</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} className="border border-blueGray300 bg-blueGray50 rounded-[9px] p-2 w-[100%] pl-[10px] pr-[10px]" />
            </div>
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="password">Kata sandi</label>
              <input type="password" id="password" value={formData.password} onChange={handleChange} className="border border-blueGray300 bg-blueGray50 rounded-[9px] p-2 w-[100%] pl-[10px] pr-[10px]" />
            </div>
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="confirm">Konfirmasi kata sandi anda</label>
              <input type="password" id="confirm" value={formData.confirm} onChange={handleChange} className="border border-blueGray300 bg-blueGray50 rounded-[9px] p-2 w-[100%] pl-[10px] pr-[10px]" />
            </div>
            <div className='flex gap-[10px]'>
              <input type="checkbox" id='Setuju' />
              <label htmlFor="Setuju">Saya setuju dengan pernyataan dalam hal layanan dan kebijakan privasi kami</label>
            </div>
          </div>
          <div className='flex flex-col gap-[10px] w-[100%] justify-center items-center'>
            <button type="submit" className='bg-colorSekunder w-[130px] h-[40px] rounded-full text-[14px] font-normal text-white'>Daftar</button>
            <div className='flex flex-row gap-[5px] text-[13px] '>
              <p>Sudah punya akun?</p>
              <a href="#" className='text-colorSekunder'>Masuk</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SectionTiga;
