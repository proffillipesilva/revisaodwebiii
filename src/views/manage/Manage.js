import React from 'react'

import { Col, Container, Row } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FlowerService from '../../services/FlowerService';
import { useNavigate, useParams } from 'react-router-dom';

function Manage() {

    const params = useParams();
    const nav = useNavigate();

    const [form, setform] = React.useState({nome: '', preco: '', imagem: ''})

    React.useEffect(() => {
        const id = params.id;
        FlowerService.getOneFlower(id)
        .then(savedFlower => setform(savedFlower))
        .catch(err => {
            console.log(err);
            setform([])
        })
    }, [])

    const handleInput = (e) => {
        const {name, value} = e.target;
        setform({...form, [name]: value})
    }

    const submit = async (e) => {
        
        e.preventDefault();
        console.log(form);
        const id = params.id;
        if(id){
            await FlowerService.updateOneFlower(id, form)
        } else {
            await FlowerService.insertFlower(form)
        }
        
    }

    const deleteFlower = async (e) => {
        
        e.preventDefault();
        const id = params.id;
        await FlowerService.deleteOneFlower(id);
        nav('/flores')
    }

    return (
        <Container>
            <Row>
                <Col md={{ span: 4, offset: 4 }} >
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control value={form.nome} onChange={handleInput} name='nome' type="text" placeholder="Enter flower name" />
                           
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPrice">
                            <Form.Label>Preço</Form.Label>
                            <Form.Control value={form.preco} onChange={handleInput} name='preco' type="text" placeholder="Enter flower price" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicImage">
                            <Form.Label>Imagem</Form.Label>
                            <Form.Control value={form.imagem} onChange={handleInput} name='imagem' type="text" placeholder="Enter flower image url" />
                        </Form.Group>

                        <Button onClick={submit} variant="primary" type="submit">
                            Submit
                        </Button>
                        {params.id && 
                        <Button onClick={deleteFlower} variant="danger" type="submit">
                            Deletar
                        </Button>
                        }
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Manage;