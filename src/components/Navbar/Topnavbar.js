import React, { useState } from 'react';
import Home from '../../pages/Home/Home';
import Anime from '../../pages/Anime/Anime';
import Manga from '../../pages/Manga/Manga';
import Contato from '../../pages/Contato/Contato';
import { Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import "./style.css";

function Topnavbar(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className='geral' light expand="md">
                <NavbarBrand className='logoNome' href="/">GEEK World</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink><Link to="/">Home</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/Anime">Anime</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/Manga">Mangá</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/Contato">Contato</Link></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Topnavbar;