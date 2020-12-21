import React from 'react';
import Navbar from '../../components/Navbar/Topnavbar';
import Footer from '../../components/Footer/Footer';

import Carrosel from '../../components/Carrosel/Carrosel';
import './style.css';


function Manga(props) {
    return (
        <div>
            <Navbar />
            <Carrosel />
            <Footer/>
        </div>
    );
}

export default Manga;