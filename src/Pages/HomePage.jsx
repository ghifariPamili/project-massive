import React from 'react'
import HerosComponent from '../Components/HerosComponent'
import AboutComponent from '../Components/AboutComponent'
import Section1 from '../Components/Section1';
import Section2 from '../Components/Section2';
import Section3 from '../Components/Section3';
import Section4 from '../Components/Section4';
import LayananComponent from '../Components/LayananComponent';
import HeaderComponent from '../Components/HeaderComponent';

const HomePage = () => {
    const sections = [
        { title: 'Section 1', component: <Section1 /> },
        { title: 'Section 2', component: <Section2 /> },
        { title: 'Section 3', component: <Section3 /> },
        { title: 'Section 4', component: <Section4 /> },
    ];

    return (
      <div>
        <HeaderComponent />
        <HerosComponent sections={sections} />
        <LayananComponent />
        <AboutComponent />
      </div>
    );
};

export default HomePage;
