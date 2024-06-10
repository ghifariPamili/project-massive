import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ilustasi3 from '../assets/ilustasi3.png';

const Section3 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="flex bg-customCyan flex-row items-start justify-between gap-[10px] h-full text-white">
      <div ref={ref} className='rightDiv w-[50%] h-[100%] flex flex-col items-start justify-center pl-[140px] gap-[40px] '>
        <motion.h1
          className='text-blue-950 text-[60px] leading-tight font-bold'
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          Dari Mahasiswa<br /> untuk Mahasiswa
        </motion.h1>
        <motion.p
          className='pr-[90px] text-blue-950 text-[24px] leading-tight text-justify'
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          Mahasiswa sering kepepet waktu dan dana, kan? <a className='text-orange-500 font-semibold'>JasTip MaMa</a> bikin kamu bisa saling bantu sama teman-teman buat berbagi sumber daya. Jadi, urusan kebutuhan sehari-hari jadi lebih gampang dan seru.
        </motion.p>
      </div>
      <motion.div
        className='w-[50%] h-[100%] flex items-center justify-start'
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <img src={ilustasi3} alt="Illustration" className='' />
      </motion.div>
    </div>
  );
};

export default Section3;
