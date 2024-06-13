import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import SectionMakanan from '../Components/CategorySection/SectionMakanan';
import SectionAlatTulis from '../Components/CategorySection/SectionAlatTulis';
import SectionLoundry from '../Components/CategorySection/SectionLoundry';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

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
    <div className='Main w-full h-screen bg-cyan-50 p-[10px]'>
      <div className='isi flex flex-col justify-between items-center gap-[10px] w-full h-full bg-cyan-50 p-[10px]' >
        <div className="iklan w-full rounded-[20px] h-full bg-cyan-300">
          <h1 className='text-[50px] font-bold text-center'>Mager?</h1>
          <p className='text-2xl font-bold text-center flex justify-center item-center'>Nitip mudah, murah dan terpercaya, yaa di Jastip MaMa</p>
          <p className='flex justify-center item-center'>Tunggu apalagi, yuk jastip sekarang di Jastip MaMa</p>
          <div className='flex justify-between'>
          <img src="./src/assets/rocket.png" alt="" />
          <img src="./src/assets/jastip.png" alt="" />
        </div>
        </div>
        <div className="kategori flex flex-row p-[10px] justify-start items-center gap-[30px] bg-transparent w-full h-[230px] ">
          <div className="kategori-items  ">
            <img src="./src/assets/gambarfood.png" alt=""  onClick={() => navigate('/homeUser/makanan')}  className='bg-gray-400 w-[80px] h-[80px] rounded-full'/>
            <div>Makanan</div>
          </div>
          <div className="kategori-items  ">
            <img src="./src/assets/atk.png" alt=""  className='bg-gray-400 w-[80px] h-[80px] rounded-full'/>
            <div>ATK</div>
          </div>
          <div className="kategori-items  ">
            <img src="./src/assets/laundry.png" alt=""  className='bg-gray-400 w-[80px] h-[80px] rounded-full'/>
            <div>Laundry</div>
          </div>
          <div className="kategori-items  ">
            <img src="./src/assets/obat.png" alt=""  className='bg-gray-400 w-[80px] h-[80px] rounded-full'/>
            <div>Obat</div>
          </div>
          <div className="kategori-items  ">
            <img src="./src/assets/skincare.png" alt=""  className='bg-gray-400 w-[80px] h-[80px] rounded-full'/>
            <div>Skincare</div>
          </div>
          <div className="kategori-items  ">
            <img src="./src/assets/etc.png" alt=""  className='bg-gray-400 w-[80px] h-[80px] rounded-full'/>
            <div>ETC</div>
          </div>
          
        </div>
        <div className="BodyList flex flex-col justify-start items-start rounded-[20px] bg-cyan-100 w-full h-[600px] p-[10px]">
          <div className='title text-[20px]'>
            Jastip yang lagi ada..
          </div>
          <div className='isiList w-full flex flex-row justify-between items-center h-full gap-[10px] p-[5px] bg-transparent'>
            <div className="list bg-transparent h-full rounded-[20px] p-[5px] w-[60%]">
            
              <div className="navigation-buttons p-[1px] flex justify-between items-center h-full w-full">
                <button onClick={handlePrevious} className="previous-button w-[40px] h-[40px] rounded "><FaArrowAltCircleLeft /></button>
                {sections[currentSectionIndex].component}
                <button onClick={handleNext} className="next-button w-[px] h-[40px] rounded"><FaArrowAltCircleRight /></button>
              </div>
            </div>
            <div className="information bg-white w-[40%] h-full rounded-[20px] flex justify-center items-center p-[40px] text-center">
              klik list jastip disamping untuk melihat detail jastip
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BerandaComptUser