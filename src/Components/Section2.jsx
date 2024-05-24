import React from 'react';
// import { FaArrowRight } from 'react-icons/fa';
import ilustasi1 from '../assets/ilustasi1.png';

const Section2 = () => {
  return (
    <div className="flex bg-teal-200 flex-row items-start justify-between gap-[10px] h-full text-white">
      <div className='rightDiv w-[50%] h-[100%] flex flex-col items-start justify-center pl-[100px] gap-[40px] '>
        <h1 className='text-blue-950 text-[50px] font-bold'>Mager? Nggak Lagi!</h1>
        <p className=' pr-[90px] text-blue-950 text-[24px] leading-tight text-justify'>Hai, kamu! Iya, kamu. Sering ngalamin kesulitan dalam mencari jasa yang sesuai  dengan kebutuhan kamu, apalagi pas jadwal kuliahmu lagi padet-padetnya? Eits, tenang! <a className='text-orange-500 font-semibold'>JasTip MaMa</a> membantu kamu dalam mencari jasa yang  dibutuhkan dengan lebih mudah dan efektif.</p>
      </div>
      <div className=' w-[50%] h-[100%] flex items-center justify-center '>
        <img src={ilustasi1} alt="Illustration" className='' />
      </div>
    </div>
  );
};

export default Section2;
