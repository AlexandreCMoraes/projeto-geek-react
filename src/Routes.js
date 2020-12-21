import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Anime from './pages/Anime/Anime';
import Manga from './pages/Manga/Manga';
import Contato from './pages/Contato/Contato';


function Routes(props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/Anime' component={Anime} />
                <Route path='/Manga' component={Manga} />
                <Route path='/Contato' component={Contato} />
                {/* <Route path='/Detalhes/:tipo/:id' component={Detalhes} /> */}
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;