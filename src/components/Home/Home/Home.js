import React from 'react';
import Banner from '../../Banner/Banner';
import Experts from '../../Experts/Experts';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Services from '../../Service/Service';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
            <Footer></Footer>
        </div>
    );
};

export default Home;