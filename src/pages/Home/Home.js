import React from 'react';
import Footer from '../../components/Footer/Footer';
import './style.css'
import Navbar from '../../components/Navbar/Topnavbar';


function Home(props) {
    return (
          
          
        <div className='body'>
       <Navbar></Navbar>
            <div className='banner'></div>

            {/*  titulos dos animes   */}
            <div className="line-text" mt='2%;'>
                <div width='100px;'></div>
                <h2>Animes Populares!</h2>
            </div>
            <div className="projetos" id="animes-recentes"></div>
            {/*  aqui ocorre o consumo de api dos cards  */}

            {/*  titulos dos animes  */}
            <div className="line-text" mt='2%;'>
                <div width='100px;'></div>
                <h2>Animes Atualizados!</h2>
            </div>
            <div className="projetos" id="animes-novos"></div>
            {/*  aqui ocorre o consumo de api dos cards  */}

            {/*  titulos dos mangas   */}
            <div className="line-text" mt='2%;'>
                <div width='100px;'></div>
                <h2>Novos Mangás!</h2>
            </div>
            <div className="projetos" id="mangas-novos"></div>
            {/*  aqui ocorre o consumo de api dos cards  */}

            <Footer />
        </div>    );
}

export default Home;