import React from 'react';
import Navbar from '../../components/Navbar/Topnavbar';
import Footer from '../../components/Footer/Footer';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import './style.css';

function Contato(props) {
    return (
        <div className="formulario">
            <Navbar />

            <div className="row">
                <Form className="col-6">
                    <FormGroup>
                        <Label for="exampleName">Nome</Label>
                        <Input type="text" name="nome" id="exampleName" placeholder="with a placeholder" />
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Motivo do contato</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>Dúvidas</option>
                            <option>Elogios</option>
                            <option>Críticas</option>
                            <option>Sugestões</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Text Area</Label>
                        <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </div>

            <Footer />

        </div>
    );
}

export default Contato;