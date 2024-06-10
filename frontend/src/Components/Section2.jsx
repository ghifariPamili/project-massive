import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ilustasi1 from '../assets/ilustasi1.png';

const Section2 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="flex bg-customCyan flex-row items-start justify-between gap-[10px] h-full text-white">
      <div ref={ref} className='rightDiv w-[50%] h-[100%] flex flex-col items-start justify-center pl-[100px] gap-[40px]'>
        <motion.div 
          className='flex flex-col gap-[14px]'
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h1 className='text-blue-950 text-[50px] font-bold'>Mager? Nggak Lagi!</h1>
        </motion.div>
        <motion.p 
          className='pr-[90px] text-blue-950 text-[24px] leading-tight text-justify'
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          Hai, kamu! Iya, kamu. Sering ngalamin kesulitan dalam mencari jasa yang sesuai  dengan kebutuhan kamu, apalagi pas jadwal kuliahmu lagi padet-padetnya? Eits, tenang! <a className='text-orange-500 font-semibold'>JasTip MaMa</a> membantu kamu dalam mencari jasa yang  dibutuhkan dengan lebih mudah dan efektif.
        </motion.p>
      </div>
      <div className=' w-[50%] h-[100%] flex items-center justify-center'>
        <img src={ilustasi1} alt="Illustration" className='' />
      </div>
    </div>
  );
};

export default Section2;
