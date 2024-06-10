import React, { useState } from 'react';
import SectionPenitip from "./AlurSection/SectionPenitip";
import SectionDriver from "./AlurSection/SectionDriver";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function AlurComponent() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedSection, setSelectedSection] = useState('penitip');

  return (
    <div ref={ref} className="bg-customCyan text-black h-screen flex items-center justify-center">
      <div className="text-center p-6">
        <h1 className="text-5xl font-bold mb-4">Alur Proses</h1>
        <div>
          <div className="flex justify-center gap-[20px]">
            <motion.button
              onClick={() => setSelectedSection('penitip')}
              className={`flex items-center gap-2 px-[50px] py-[13px] rounded-full font-semibold ${selectedSection === 'penitip' ? 'bg-blue-950 text-white' : 'bg-white text-black'}`}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
            >
              Sebagai penitip
            </motion.button>
            <motion.button
              onClick={() => setSelectedSection('driver')}
              className={`flex items-center gap-2 px-[50px] py-[13px] rounded-full font-semibold ${selectedSection === 'driver' ? 'bg-blue-950 text-white' : 'bg-white text-black'}`}
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
            >
              Sebagai driver
            </motion.button>
          </div>
        </div>
        <div className="flex justify-between">
          {selectedSection === 'penitip' ? <SectionPenitip /> : <SectionDriver />}
        </div>
        <div className="text-center mt-6"></div>
      </div>
    </div>
  );
}

export default AlurComponent;
