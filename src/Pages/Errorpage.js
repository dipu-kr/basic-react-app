import React from 'react'
import Navbar from '../Navbar';
import Error404 from '../Error404';
import Footer from '../Footer';

const Errorpage = () =>{
    return(
        <>
            <Navbar />       
            <Error404 />
            <Footer />
        </>
    )
}

export default Errorpage;