import React from 'react'
import FlowerService from '../../services/FlowerService'
import FlowerCard from '../../components/FlowerCard';
import { Container } from 'react-bootstrap';

function Flores() {


  const [flowers, setflowers] = React.useState([])

  React.useEffect(() => {
    FlowerService.getFlowers()
    .then(flowersResponse => setflowers(flowersResponse));    
  }, [])

  return (
    <div>
        <Container >
        {flowers && flowers.map((flower, index) => (
            <div key={index}>
            <FlowerCard nome={flower.nome}
            preco={flower.preco}
            imagem={flower.imagem}
            flowerId={flower.id} />
            </div>
           
        ))}
        </Container>



    </div>
  )
}

export default Flores