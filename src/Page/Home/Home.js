import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Features from '../Features/Features';
import MyPortfolio from '../Portfolio/MyPortfolio';
import MySkills from '../MySkills/MySkills';
import Qualification from '../Qualification/Qualification';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <MySkills></MySkills>
            <Qualification></Qualification>
            <Features></Features>
            <MyPortfolio></MyPortfolio>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;