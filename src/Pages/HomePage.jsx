import React from 'react'
// import Header from '../Components/HeaderComponent'
import HerosComponent from '../Components/HerosComponent'
import Section1 from '../Components/Section1';
import Section2 from '../Components/Section2';


const HomePage = () => {
    const sections = [
      { title: 'Section 1', component: <Section1 /> },
      { title: 'Section 2', component: <Section2 /> },
    ];
  
    return (
      <div className="App">
        <HerosComponent sections={sections} />
      </div>
    );
  };

export default HomePage