import React from 'react'
import HerosComponent from '../Components/HerosComponent'
import AboutComponent from '../Components/AboutComponent'
import Section1 from '../Components/Section1';
import Section2 from '../Components/Section2';
import Section3 from '../Components/Section3';
import LayananComponent from '../Components/LayananComponent';
import HeaderComponent from '../Components/HeaderComponent';
import FiturComponent from '../Components/FiturComponent'
import AlurComponent from '../Components/AlurComponent'
import FooterComponent from '../Components/FooterComponent';


const HomePage = () => {
    const sections = [
        { title: 'Section 1', component: <Section1 /> },
        { title: 'Section 2', component: <Section2 /> },
        { title: 'Section 3', component: <Section3 /> },
    ];

    return (
      <div>
        <HeaderComponent />
        <div id="heros"><HerosComponent sections={sections} /></div>
        <div id="fitur"><FiturComponent /></div>
        <div id="alur"><AlurComponent /></div>
        <div id="layanan"><LayananComponent /></div>
        <div id="about"><AboutComponent /></div>
        <FooterComponent />
      </div>
    );
};

export default HomePage;
