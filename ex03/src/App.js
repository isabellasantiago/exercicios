import { useState } from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [numeros, setNumeros] = useState([]);

  const gerarNumeros = () => {
    let numerosGerados = [];

    for(let i = 0; i <= 5; i++) {
      numerosGerados.push(Math.floor(Math.random() * 60));
    }

    setNumeros(numerosGerados);
  }

  return (
    <Card
      className='w-50 mb-2 border p-2'
    >
      <Card.Header className="border">Mega Sena</Card.Header>
      <Card.Body className='border'>
        <ListGroup
          horizontal
          className="border border-success rounded"
          size="lg"
          style={{ height: '3.8rem'}}
        >
            {numeros?.map((numero) => (
              <ListGroup.Item
                className='d-flex flex-fill justify-content-center align-items-center text-success'
                style={{background: '#D1E7DD', width:'4rem'}}
              >
                {numero}
              </ListGroup.Item>
            ))}
        </ListGroup>
          <div className='d-grid gap-2 mt-2'>
            <Button
              variant='outline-success'
              size='lg'
              onClick={gerarNumeros}
            >
              Gerar jogo
            </Button>
          </div>
      </Card.Body>
    </Card>
  );
}

export default App;
