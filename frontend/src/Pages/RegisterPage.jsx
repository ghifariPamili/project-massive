import React, { useState } from 'react';
import SectionSatu from '../Components/RegisterSection/SectionSatu';
import SectionDua from '../Components/RegisterSection/SectionDua';
import SectionTiga from '../Components/RegisterSection/SectionTiga';

const RegisterPage = () => {
  const [currentSection, setCurrentSection] = useState(1);

  const goToSection = (section) => {
    console.log(`Navigating to section ${section}`);
    setCurrentSection(section);
  };

  return (
    <div>
      {currentSection === 1 && <SectionSatu goToSection={() => goToSection(2)} />}
      {currentSection === 2 && <SectionDua goToSection={() => goToSection(3)} />}
      {currentSection === 3 && <SectionTiga />}
    </div>
  );
};

export default RegisterPage;
