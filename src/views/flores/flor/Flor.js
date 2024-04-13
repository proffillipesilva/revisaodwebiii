import React from 'react'
import { Container, Row, Col, Image, Table } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import FlowerService from '../../../services/FlowerService';

function Flor() {
    const params = useParams();
  const [flor, setflor] = React.useState({nome: '', preco: '', imagem: ''})

  React.useEffect(() => {
    
    const id = params.id;
    FlowerService.getOneFlower(id)
    .then(flower => setflor(flower))
  }, [])

  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src={flor.imagem} rounded />
        </Col>
        </Row>

        <Table striped="columns">
      <thead>
        <tr>
          
          <th>Atributo</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Nome</td>
          <td>{flor.nome}</td>
        </tr>
        <tr>
          <td>Preco</td>
          <td>{flor.preco}</td>
        </tr>
        </tbody>
        </Table>
        <Row>
            <Link to={"/manage/"+flor.id} >Gerenciar Flor</Link>
        </Row>
    </Container>
  )
}

export default Flor