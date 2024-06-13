import { BiRun } from "react-icons/bi";
import { PiMoneyWavyFill } from "react-icons/pi";
import { GiReceiveMoney } from "react-icons/gi";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { SiAdguard } from "react-icons/si";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function LayananComponent() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div ref={ref} className="bg-white-500 text-black pt-[60px]  flex items-center justify-center">
      <div className="text-center p-6">
        <h1 className="text-5xl font-bold mb-4">Layanan Kami</h1>
        <p className="text-xl mb-6">Yang akan kamu dapatkan</p>
        <div className="flex justify-between">

        <div className="flex flex-col gap-[20px]">
          <div className="flex justify-center items-between gap-[20px]">
            <motion.div initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.2 }} className="p-4 bg-cyan-500 bg-opacity-30 rounded-lg m-2 shadow-[5px_5px_13px_0_rgba(0,0,0,0.3)]">
            <div className="flex items-center justify-center"><BiRun size="5em" /></div>
              <h2 className="text-2xl font-semibold   mb-2">Kemudahan</h2>
              <p className="text-[12px]  font-semibold w-[300px] ">Hanya dengan beberapa klik, kamu bisa mengirim atau menerima barang tanpa ribet.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }} className="p-4 bg-cyan-500 bg-opacity-30 rounded-lg m-2 shadow-[5px_5px_13px_0_rgba(0,0,0,0.3)]">
            <div className="flex items-center justify-center"><PiMoneyWavyFill size="5em"/></div>
              <h2 className="text-2xl font-semibold mb-2">Terjangkau</h2>
              <p className="text-[12px]  font-semibold w-[300px]">Nikmati layanan terbaik dengan harga  yang bersahabat!</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }} className="p-4 bg-cyan-500 bg-opacity-30 rounded-lg m-2 shadow-[5px_5px_13px_0_rgba(0,0,0,0.3)]">
            <div className="flex items-center justify-center"><SiAdguard size='5em'/></div>
              <h2 className="text-2xl font-semibold mb-2">Keamanan</h2>
              <p className="text-[12px] w-[300px] font-semibold">Setiap penyedia jasa terverifikasi sehingga kamu bisa menggunakan layanan kami dengan tenang.</p>
            </motion.div>
            
          </div>
          <div className="flex justify-center items-between gap-[20px]">
            <motion.div initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }} className="p-4 bg-cyan-500 bg-opacity-30 rounded-lg m-2 shadow-[5px_5px_13px_0_rgba(0,0,0,0.3)]">
            <div className="flex items-center justify-center"><LiaUserFriendsSolid size='5em'/></div>
              <h2 className="text-2xl font-semibold mb-2">Menambah Relasi</h2>
              <p className="text-[12px] w-[400px] font-semibold">Berinteraksi dengan sesama mahasiswa yang menawarkan dan membutuhkan  jasa titip-menitip bisa menambah relasi dan memperkaya pengalamanmu  selama di kampus.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1}} className="p-4 bg-cyan-500 bg-opacity-30 rounded-lg m-2 shadow-[5px_5px_13px_0_rgba(0,0,0,0.3)]">
            <div className="flex items-center justify-center"><GiReceiveMoney size='5em'/></div>
              <h2 className="text-2xl font-semibold mb-2">Negoable</h2>
              <p className="text-[12px]  font-semibold w-[400px]">Kamu bisa bernegosiasi harga secara langsung dengan penyedia  jasa dan mendapatkan layanan terbaik dengan harga yang sesuai  dengan budgetmu.</p>
            </motion.div>
          </div>
        </div>
        </div>
        <div className="text-center ">
        </div>
      </div>
    </div>
  )
}

export default LayananComponent