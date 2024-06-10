import React from 'react'
import { IoChatbubblesOutline, IoLocationOutline } from "react-icons/io5";
import { TbUserQuestion } from "react-icons/tb";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FiturComponent = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="bg-white-500 text-black h-screen flex items-center justify-center">
      <div className="text-center p-6">
        <h1 className="text-5xl font-bold mb-4">Fitur yang akan anda sukai</h1>
        <p className="text-xl mb-6">Kami mempunyai fitur-fitur yang bisa digunakan untuk melakukan jastip, khususnya ketika kamu ingin menjadi driver atau penitip.</p>
        <div className="flex justify-between">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="gap-[10px] p-4 flex flex-col justify-start items-center bg-white-100 bg-opacity-0 rounded-lg m-2"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className='flex items-center justify-center bg-customCyan h-[180px] w-[180px] rounded-full p-[20px]'>
                <IoChatbubblesOutline size='200px' />
              </div>
              <h2 className="text-2xl font-bold mb-2">Chatting</h2>
              <p className="text-lg">Fitur yang membantu Anda berdiskusi dan memastikan bahwa Anda dan driver memiliki kesepahaman yang sama.</p>
            </motion.div>
            <motion.div
              className="gap-[10px] p-4 flex flex-col justify-start items-center bg-white-100 bg-opacity-0 rounded-lg m-2"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className='flex items-center justify-center bg-customCyan h-[180px] w-[180px] rounded-full p-[20px]'>
                <IoLocationOutline size='200px' />
              </div>
              <h2 className="text-2xl font-bold mb-2">Tracking Lokasi Driver</h2>
              <p className="text-lg">Fitur yang membantu Anda untuk memantau proses pengiriman dengan lebih efektif dan aman.</p>
            </motion.div>
            <motion.div
              className="gap-[10px] p-4 flex flex-col justify-start items-center bg-white-100 bg-opacity-0 rounded-lg m-2"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className='flex items-center justify-center bg-customCyan h-[180px] w-[180px] rounded-full p-[20px]'>
                <TbUserQuestion size='200px' />
              </div>
              <h2 className="text-2xl font-bold mb-2">Pengaduan</h2>
              <p className="text-lg">Fitur yang memungkinkan berbagi pengalaman dan solusi.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FiturComponent;
