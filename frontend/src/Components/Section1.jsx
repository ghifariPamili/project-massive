import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ilustasi2 from '../assets/ilustasi2.png';
import Sponsor1 from "../assets/LogoCelerates.png";
import Sponsor2 from "../assets/LogoMsib.png";
import Sponsor3 from "../assets/TheMavericsLogo.png";

const Section1 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex bg-customCyan flex-row items-start justify-between gap-[10px] h-full text-white">
      <div className='rightDiv w-[50%] h-[100%] flex flex-col items-start justify-start'>
        <div className='Main h-[85%] w-[100%] pl-[100px] flex flex-col items-start justify-center gap-[30px]'>
          <motion.div 
            className='flex flex-col gap-[14px]'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className='text-blue-950 text-[50px] font-bold'>Jasa Titip <br /> Mahasiswa Mager</h1>
          </motion.div>
          <motion.p 
            className='text-blue-950 text-[24px] pr-[130px] leading-tight'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Kami akan membantumu untuk tetap cozy di tempatmu,<br />
            biar kami yang ini itu.
          </motion.p>
          <motion.button 
            className='flex items-center gap-2 bg-blue-950 text-white px-8 py-[13px] rounded-full font-semibold'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            onClick={() => navigate('/register')}
          >
            Get Started <div><FaArrowRight /></div>
          </motion.button>
        </div>
        <div className='flex flex-col gap-[22px] justify-start items-start h-[15%] w-full px-[100px]'>
          <p className='text-[11px] text-blue-950 '>Bekerja Dengan yang terbaik</p>
          <div className='flex gap-[20px]'>
            <a href="https://kampusmerdeka.kemdikbud.go.id/" className='size-full bg-white'><img src={Sponsor2} href="" alt="MSIB"  /></a>
            <a href="#" className='size-full bg-white'><img src={Sponsor3} href="" alt="TheMavericks"  /></a>
            <a href="https://celerates.co.id/" className='size-full'><img src={Sponsor1} alt="Celerates" className='' /></a>
          </div>
        </div>
      </div>
      <motion.div
        className='w-[50%] h-[100%] flex items-center justify-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={ilustasi2} alt="Illustration" className='' />
      </motion.div>
    </div>
  );
};

export default Section1;
