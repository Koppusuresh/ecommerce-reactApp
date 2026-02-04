import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Cards = () => {
  const [products, setProducts] = useState([]);
 let navigate=useNavigate();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="d-flex flex-wrap gap-3 justify-content-center">
      {products.map(product => (
        <Card key={product.id} style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src={product.image}
            style={{ height: '200px', objectFit: 'contain' }}
          />
          <Card.Body>
            <Card.Title className="fs-6">
              {product.title}
            </Card.Title>
             <Card.Text >{product.description.slice(0,40)}</Card.Text>
            <Button variant="primary" onClick={()=>navigate("/details",{state:product})}>More Details</Button>
          </Card.Body>
        </Card>
      ))}
    </div>

  );
};

export default Cards;
