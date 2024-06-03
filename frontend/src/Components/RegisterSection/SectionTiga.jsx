import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Ilustrasi from './assetSection/ilustasi2.png';

const SectionTiga = ({ userData }) => {
  const [formData, setFormData] = useState({
    nim: '',
    email: '',
    password: '',
    confirm: '',
    setuju: false
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.setuju) {
      setError('Mohon setujui syarat dan ketentuan.');
      return;
    }

    if (formData.password !== formData.confirm) {
      setError('Konfirmasi password tidak sesuai.');
      return;
    }

    const registrationData = { ...userData, ...formData };
    console.log('Registering user with data:', registrationData);

    try {
      await axios.post('http://localhost:5000/api/register', registrationData);
      setSuccess('Pendaftaran berhasil!');
      navigate('/login');
    } catch (error) {
      setError('Pendaftaran gagal. Silakan coba lagi.' + error);
      console.log(error);
    }

  };

  return (
    <div className='Container text-blue-950 font-semibold flex overflow-hidden font'>
      <div className='Information h-screen w-[50%] bg-customCyan rounded-tr-[40px]'>
        <div className='InfoContainer size-[100%] flex flex-col items-center justify-start pt-[40px] gap-[40px]'>
          <div className='flex flex-col gap-[10px]'>
            <p className='text-[25px]'>Solusi Anti Mager buat Mahasiswa </p>
            <nav className='flex justify-between shadow-lg'>
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
        <form onSubmit={handleSubmit} className='h-screen w-[100%] flex flex-col items-center justify-center gap-[40px] px-[40px]'>
          <div className='flex flex-col w-[100%]'>
            <h1 className='text-[40px] font-bold'>Bergabunglah dengan kami</h1>
            <p>Ingat Mahasiswa, Ingat JasTip MaMa.</p>
          </div>
          <div className='w-[100%] text-[13px] flex flex-col gap-[10px]'>
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="nim">NIM</label>
              <input type="text" id="nim" value={formData.nim} onChange={handleChange} className="border border-blueGray300 bg-blueGray50 rounded-[9px] p-2 w-[100%] pl-[10px] pr-[10px]" />
            </div>
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} className="border border-blueGray300 bg-blueGray50 rounded-[9px] p-2 w-[100%] pl-[10px] pr-[10px]" />
            </div>
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" value={formData.password} onChange={handleChange} className="border border-blueGray300 bg-blueGray50 rounded-[9px] p-2 w-[100%] pl-[10px] pr-[10px]" />
            </div>
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="confirm">Konfirmasi Password</label>
              <input type="password" id="confirm" value={formData.confirm} onChange={handleChange} className="border border-blueGray300 bg-blueGray50 rounded-[9px] p-2 w-[100%] pl-[10px] pr-[10px]" />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="setuju" checked={formData.setuju} onChange={handleChange} />
              <label htmlFor="setuju">Saya setuju dengan syarat dan ketentuan yang berlaku</label>
            </div>
            {error && <p className='text-red-500'>{error}</p>}
            {success && <p className='text-green-500'>{success}</p>}
          </div>
          <div className='flex flex-col gap-[10px] w-[100%] justify-center items-center'>
            <button type='submit' className='bg-colorSekunder w-[130px] h-[40px] rounded-full text-[14px] font-normal text-white'>Daftar</button>
            <div className='flex flex-row gap-[5px] text-[13px]'>
              <p>Sudah punya akun?</p>
              <Link to="/login" className='text-colorSekunder'>Masuk</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SectionTiga;
