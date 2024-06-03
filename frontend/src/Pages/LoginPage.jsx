import React, { useState } from 'react';
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', formData, {
        withCredentials: true
      });
      console.log(response.data);
      // Lakukan tindakan setelah login berhasil, seperti mengarahkan ke halaman lain
      navigate('/sectionTiga'); // Contoh navigasi ke bagian lain dari aplikasi
    } catch (error) {
      console.error(error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='Container text-blue-950 font-semibold flex overflow-hidden font'>
      <div className='Information h-screen w-[50%] bg-customCyan rounded-tr-[40px]'>
        <div className='InfoContainer size-[100%] flex flex-col items-start justify-center px-[90px] gap-[80px]'>
          <div>
            <h1 className='text-[40px] font-bold'>Selamat datang<br/> di komunitas kami</h1>
            <p>Ingat Mahasiswa, Ingat JasTip MaMa.</p>
          </div>
          <div className='Review flex flex-col gap-[30px]'>
            <div className='IsiReview'>
              <div className='StarRating '>
                <span className='text-colorRating text-[22px]'>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              </div>
              <p>"Coba ini, bro/sis! Nih, website baru ini bakal bikin hidupmu makin asyik! Bukan cuma nambahin keren-kerenan layanan kita, tapi juga nyelesin masalah-masalah yang sering nyebelin pas lagi titip-titipan antar mahasiswa. Yuk, langsung cek dan rasain manfaatnya!"</p>
            </div>
            <div className='flex gap-[20px]'>
              <img src="" alt="" className='bg-gray-300 w-[40px] h-[40px] rounded-full' />
              <div className='informationReviewer flex flex-col'>
                <a href="#" className='text-[12px]'>Jessice</a>
                <a href="#" className='text-[12px]'>Mahasiswi Teknik, 2021</a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[421.23px] h-[512.45px] left-[-100.45px] top-[-431.42px] absolute origin-top-left rotate-[37.21deg] opacity-10 rounded-full border-8 border-blue-950" />
      </div>
      <div className='formIsi h-screen w-[50%] bg-white z-10'>
        <form onSubmit={handleSubmit} className='h-screen w-[100%] flex flex-col items-center justify-center gap-[30px] px-[40px]'>
          <div className='flex flex-col w-[100%]'>
            <h1 className='text-[40px] font-bold'>Selamat datang<br/> kembali!</h1>
            <p>Ingat Mahasiswa, Ingat JasTip MaMa.</p>
          </div>
          <div className='w-[100%]'>
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handleChange}
                className="border border-blueGray300 bg-blueGray50 rounded-full p-2 w-[100%] pl-[30px] pr-[40px]"
              />
            </div>
            <div className="flex flex-col items-start gap-2 relative">
              <label htmlFor="password">Kata Sandi</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="border border-blueGray300 bg-blueGray50 rounded-full p-2 w-[100%] pl-[30px] pr-[40px]"
              />
              <button type="button" onClick={togglePasswordVisibility} className="absolute right-4 top-11">
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            <div className='flex gap-[20px] w-[100%] justify-between'>
              <div className='flex gap-[10px]'>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Ingat saya</label>
              </div>
              <div>
                <a href="#" className='text-colorSekunder'>Lupa Kata Sandi?</a>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-[10px] w-[100%]'>
            <button type="submit" className='bg-colorSekunder w-[130px] h-[40px] rounded-full text-white' onClick={() => navigate('/home')}>Masuk</button>
            <div className='flex flex-row gap-[5px]'>
              <p>Belum punya akun?</p>
              <Link to="/Register" className='text-colorSekunder'>Buat akun</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
