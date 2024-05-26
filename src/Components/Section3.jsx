import React from 'react';
// import { FaArrowRight } from 'react-icons/fa';
import ilustasi3 from '../assets/ilustasi3.png';

const Section3 = () => {
  return (
    <div className="flex bg-customCyan flex-row items-start justify-between gap-[10px] h-full text-white">
      <div className='rightDiv w-[50%] h-[100%] flex flex-col items-start justify-center pl-[140px] gap-[40px] '>
        <h1 className='text-blue-950 text-[60px] leading-tight font-bold'>Dari Mahasiswa<br/> untuk Mahasiswa</h1>
        <p className=' pr-[90px] text-blue-950 text-[24px] leading-tight text-justify'>Mahasiswa sering kepepet waktu dan dana, kan? <a className='text-orange-500 font-semibold'>JasTip MaMa</a> bikin kamu bisa saling bantu sama teman-teman buat berbagi sumber  daya. Jadi, urusan kebutuhan sehari-hari jadi lebih gampang dan seru.</p>
      </div>
      <div className=' w-[50%] h-[100%] flex items-center justify-start '>
        <img src={ilustasi3} alt="Illustration" className='' />
      </div>
    </div>
  );
};

export default Section3;
