import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function FlowerCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imagem} />
      <Card.Body>
        <Card.Title>{props.nome}</Card.Title>
        <Card.Text>
          {props.preco}
        </Card.Text>
        <Row>
            <Link to={"/flores/"+props.flowerId}>Ver flor</Link>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default FlowerCard;