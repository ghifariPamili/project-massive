import React, { useState } from 'react';
import SectionSatu from '../Components/RegisterSection/SectionSatu';
import SectionDua from '../Components/RegisterSection/SectionDua';
import SectionTiga from '../Components/RegisterSection/SectionTiga';

const RegisterPage = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [userData, setUserData] = useState({});

  const goToSection = (section, data = {}) => {
    console.log(`Navigating to section ${section}`);
    const newData = { ...userData, ...data }; // Menggabungkan data dari SectionDua dengan userData
    setUserData(newData);
    setCurrentSection(section);
  };

  return (
    <div>
      {currentSection === 1 && <SectionSatu goToSection={() => goToSection(2)} />}
      {currentSection === 2 && <SectionDua goToSection={(data) => goToSection(3, data)} />}
      {currentSection === 3 && <SectionTiga userData={userData} />}
    </div>
  );
};

export default RegisterPage;