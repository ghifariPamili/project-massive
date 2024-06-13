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
        <div className="BodyList flex flex-col justify-start items-start bg-blue-400 w-full h-[600px] p-[10px]">
          <div className='title text-[20px]'>
            Jastip yang lagi ada..
          </div>
          <div className='isiList w-full flex flex-row justify-between items-center h-full gap-[10px] p-[5px] bg-black'>
            <div className="list bg-white h-full p-[5px] w-[60%]">
            
              <div className="navigation-buttons p-[1px] flex justify-between items-center h-full w-full">
                <button onClick={handlePrevious} className="previous-button bg-gray-200 w-[40px] h-[40px] rounded ">Previous</button>
                {sections[currentSectionIndex].component}
                <button onClick={handleNext} className="next-button bg-gray-200 w-[40px] h-[40px] rounded">Next</button>
              </div>
            </div>
            <div className="information bg-white w-[40%] h-full flex justify-center items-center p-[40px] text-center">
              klik list jastip disamping untuk melihat detail jastip
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BerandaComptUser