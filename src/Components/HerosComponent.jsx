import React, { useState } from 'react';
import HeaderComponent from './HeaderComponent';

const HerosComponent = ({ sections }) => {
  const [currentSection, setCurrentSection] = useState(0);

  const goToNextSection = () => {
    setCurrentSection(currentSection === sections.length - 1 ? 0 : currentSection + 1);
  };

  const goToPreviousSection = () => {
    setCurrentSection(currentSection === 0 ? sections.length - 1 : currentSection - 1);
  };

  return (
    <div className="hero-section flex flex-col items-center justify-center h-screen">
      <HeaderComponent />
      <div className="section-content w-full flex-grow">
        {sections.map((section, index) => (
          <div key={index} className={`section ${index === currentSection ? 'block' : 'hidden'} w-full h-full`}>
            {section.component}
          </div>
        ))}
      </div>
      <div className="navigation-buttons mt-4 flex justify-between w-full px-4">
        <button onClick={goToPreviousSection} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Previous
        </button>
        <button onClick={goToNextSection} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default HerosComponent;
