import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const interval = setInterval(goToNextSection, 5000); // Change section every 5 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentSection]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button 
        onClick={goToPreviousSection} 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent hover:bg-colorPrimer text-black hover:text-white font-bold py-2 px-4 rounded-full">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      {sections.map((section, index) => (
        <div key={index} className={`section ${index === currentSection ? 'block' : 'hidden'} w-full h-full`}>
          {section.component}
        </div>
      ))}
      <button 
        onClick={goToNextSection} 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent hover:bg-colorPrimer text-black hover:text-white font-bold py-2 px-4 rounded-full">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default HerosComponent;
