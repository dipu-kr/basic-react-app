import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Page1 from './Page1';
import Page2  from './Page2';
import Service from './Service';
import Contact from './Contact';
import Footer from './Footer';
const Home = () =>{
    return(
        <>
            <Navbar />
            <Header />
            <Page1 />
            <Page2 />
            <Service />
            <Contact />
            <Footer />
        </>
    )
}

export default Home;