import React from 'react';
import Navbar from '../../components/Navbar/Topnavbar';
import Carrosel from '../../components/Carrosel/Carrosel';
import Footer from '../../components/Footer/Footer';
import './style.css';

function Anime(props) {
    return (
        <div>
            <Navbar />
            <Carrosel />
            <Footer/>
        </div>
    );
}

export default Anime;