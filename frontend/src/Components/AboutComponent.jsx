import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function AboutComponent() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div ref={ref} className="bg-white-500 text-black pt-[60px] flex items-center justify-center">
      <div className="text-center p-6">
        <h1 className="text-5xl font-bold mb-2">OUR TEAM</h1>
        <p className="text-xl mb-2">THE MAVERICK</p>
        <div className="flex justify-between">

        <div className="flex flex-col gap-[20px]">
          <div className="flex justify-center items-between gap-[20px]">
            <motion.div initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3 }} className="p-1 bg-gray-500 bg-opacity-30 rounded-lg m-2 border-2 border-gray shadow-[5px_5px_13px_0_rgba(0,0,0,0.3)]">
              <img src="src/assets/Nadya.png" alt="" className="size-[140px] m-[20px] rounded-full" />
              <h2 className="text-[20px] font-semibold mb-2">Nadya</h2>
              </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }} className="p-1 bg-gray-500 bg-opacity-30 rounded-lg m-2 border-2 border-gray shadow-[5px_5px_13px_0_rgba(0,0,0,0.3)]">
              <img src="src/assets/Nabilah.png" alt="" className="size-[140px] m-[20px] rounded-full"/>
              <h2 className="text-[20px] font-semibold mb-2">Nabilah</h2>
              </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9 }} className="p-1 bg-gray-500 bg-opacity-30 rounded-lg m-1 border-2 border-gray shadow-[5px_5px_13px_0_rgba(0,0,0,0.3)]">
              <img src="src/assets/Siti.png" alt="" className="size-[140px] m-[20px] rounded-full"/>
              <h2 className="text-[20px] font-semibold mb-2">Siti Aghnina</h2>
              </motion.div>
            
          </div>
          <div  className="flex justify-center items-between gap-[20px]">
            <motion.div initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2 }} className="p-1 bg-gray-500 bg-opacity-30 rounded-lg m-2 border-2 border-gray shadow-[5px_5px_13px_0_rgba(0,0,0,0.3)]">
              <img src="src/assets/Ghifari.png" alt="" className="size-[140px] m-[20px] rounded-full"/>
              <h2 className="text-[20px] font-semibold mb-2">Ghifari</h2>
              </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.5 }} className="p-1 bg-gray-500 bg-opacity-30 rounded-lg m-2 border-2 border-gray shadow-[5px_5px_13px_0_rgba(0,0,0,0.3)]">
              <img src="src/assets/Danta2.png" alt="" className="size-[140px] m-[20px] rounded-full"/>
              <h2 className="text-[20px] font-semibold mb-2">Danta</h2>
              </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.8 }} className="p-1 bg-gray-500 bg-opacity-30 rounded-lg m-2 border-2 border-gray shadow-[5px_5px_13px_0_rgba(0,0,0,0.3)]">
              <img src="src/assets/Arif.png" alt="" className="size-[140px] m-[20px] rounded-full"/>
              <h2 className="text-[20px] font-semibold mb-2">Arief</h2>
              </motion.div>
          </div>
        </div>
        </div>
        <div className="text-center mt-6">
        </div>
      </div>
    </div>
  )
}

export default AboutComponent