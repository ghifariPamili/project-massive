import React, { useState } from 'react';
import SectionPenitip from "./AlurSection/SectionPenitip";
import SectionDriver from "./AlurSection/SectionDriver";

function AlurComponent() {
  const [selectedSection, setSelectedSection] = useState('penitip');

  return (
    <div className="bg-customCyan text-black h-screen flex items-center justify-center">
      <div className="text-center p-6">
        <h1 className="text-5xl font-bold mb-4">Alur Proses</h1>
        <div>
          <div className="flex justify-center gap-[20px]">
            <button
              onClick={() => setSelectedSection('penitip')}
              className={`flex items-center gap-2 px-[50px] py-[13px] rounded-full font-semibold ${selectedSection === 'penitip' ? 'bg-blue-950 text-white' : 'bg-white text-black'}`}
            >
              Sebagai penitip
            </button>
            <button
              onClick={() => setSelectedSection('driver')}
              className={`flex items-center gap-2 px-[50px] py-[13px] rounded-full font-semibold ${selectedSection === 'driver' ? 'bg-blue-950 text-white' : 'bg-white text-black'}`}
            >
              Sebagai driver
            </button>
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
