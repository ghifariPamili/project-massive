import React, { useState } from 'react';
import HeaderComponent from './HeaderComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const HerosComponent = ({ sections }) => {
  const [currentSection, setCurrentSection] = useState(0);

  const goToNextSection = () => {
    setCurrentSection(currentSection === sections.length - 1 ? 0 : currentSection + 1);
  };

  const goToPreviousSection = () => {
    setCurrentSection(currentSection === 0 ? sections.length - 1 : currentSection - 1);
  };

  return (
    <div className="hero-section relative flex flex-col items-center justify-center h-screen">
      <HeaderComponent />
      <div className="section-content w-full h-full flex items-center justify-center relative">
        <button 
          onClick={goToPreviousSection} 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className="w-full h-full">
          {sections.map((section, index) => (
            <div key={index} className={`section ${index === currentSection ? 'block' : 'hidden'} w-full h-full`}>
              {section.component}
            </div>
          ))}
        </div>
        <button 
          onClick={goToNextSection} 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default HerosComponent;
