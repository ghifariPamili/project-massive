import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import SectionMakanan from '../Components/CategorySection/SectionMakanan';
import SectionAlatTulis from '../Components/CategorySection/SectionAlatTulis';
import SectionLoundry from '../Components/CategorySection/SectionLoundry';


function BerandaComptUser() {
  const navigate = useNavigate();



  const sections = [
    { component: <SectionMakanan />, name: 'Makanan' },
    { component: <SectionAlatTulis />, name: 'Alat Tulis' },
    { component: <SectionLoundry />, name: 'Loundry' },
  ];

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const handleNext = () => {
    setCurrentSectionIndex((prevIndex) => (prevIndex + 1) % sections.length);
  };

  const handlePrevious = () => {
    setCurrentSectionIndex((prevIndex) => (prevIndex - 1 + sections.length) % sections.length);
  };

  return (
    <div className='Main w-full h-screen bg-red-200 p-[10px]'>
      <div className='isi flex flex-col justify-between items-center gap-[10px] w-full h-full bg-green-400 p-[10px]' >
        <div className="iklan w-full h-full bg-black">
          
        </div>
        <div className="kategori flex flex-row p-[10px] justify-start items-center gap-[30px] bg-red-400 w-full h-[230px] ">
          <div className="kategori-items  ">
            <img src="" alt=""  onClick={() => navigate('/homeUser/makanan')}  className='bg-gray-400 w-[80px] h-[80px] rounded-full'/>
            <div>Makanan</div>
          </div>
          <div className="kategori-items  ">
            <img src="" alt=""  className='bg-gray-400 w-[80px] h-[80px] rounded-full'/>
            <div>Makanan</div>
          </div>
          <div className="kategori-items  ">
            <img src="" alt=""  className='bg-gray-400 w-[80px] h-[80px] rounded-full'/>
            <div>Makanan</div>
          </div>
          <div className="kategori-items  ">
            <img src="" alt=""  className='bg-gray-400 w-[80px] h-[80px] rounded-full'/>
            <div>Makanan</div>
          </div>
          <div className="kategori-items  ">
            <img src="" alt=""  className='bg-gray-400 w-[80px] h-[80px] rounded-full'/>
            <div>Makanan</div>
          </div>
          <div className="kategori-items  ">
            <img src="" alt=""  className='bg-gray-400 w-[80px] h-[80px] rounded-full'/>
            <div>Makanan</div>
          </div>
          
        </div>
      ))}
    </div>
  );
}

function FeaturedServices({ services }) {
  return (
    <div className="bg-cyan-100 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Jastip yang lagi ada ..</h2>
      <div className="flex justify-between items-center">
        <div className="w-[300px]">
          {services.map((service, index) => (
            <div key={index} className="bg-cyan-300 rounded-[20px] border-black border-[2px]  flex justify-between mb-2">
              <p>{service.name}</p>
              <p>{service.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BerandaComptUser