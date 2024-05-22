import React from 'react';
import LogoOnly from '../assets/LogoOnly.png'

const LoginPage = () => {
  return (
    <div className='bg-cyan-100 flex flex-row justify-between items-center h-screen'>
      {/* Left Section */}
      <div className=' w-3/5 flex flex-col justify-center items-center p-8'>
        <h1 className='text-[48px] font-semibold mb-8'>Sign in To Jastip Mama</h1>
        <div className='mb-4 w-full flex flex-col justify-center items-center'>
          <input type="text" placeholder="Username" className='w-[430px] p-2 mb-6 border border-gray-300 rounded text-[15px] text-black placeholder:text-black placeholder:font-semibold ' />
          <input type="password" placeholder="Password" className='w-[430px] p-2 mb-2 border border-gray-300 rounded text-[15px] text-black placeholder:text-black placeholder:font-semibold' />
        </div>
        <div className='flex flex-col items-center'>
          <button className='text-[25px] w-[200px] p-2 mb-1 bg-transparant font-semibold text-gray-500 border-2 border-gray-800 rounded-[20px] '>Sign in</button>
          <a href="#" className='text-black mb-1'>Forgot your Password?</a>
          <div className='flex flex-row items-center'>
            <p>Belum Punya Akun?</p>
            <a href="#" className='text-black font-bold'>Sign Up</a>
          </div>
        </div>
      </div>
      
      {/* Right Section */}
      <div className='w-2/5 bg-blue-400 flex justify-center items-center h-full rounded-l-[60px]'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-black text-3xl mb-4 text-[40px] font-bold '>Welcome Back !</h1>
          <img src={ LogoOnly } alt="Illustration" className='w-[480px]' />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
