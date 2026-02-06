// import React from 'react'
import { useLocation } from 'react-router-dom'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

const ProductDetails = () => {
  const { state } = useLocation()

  if (!state) {
    return <h2 className="text-center mt-5">No product data found</h2>
  }

  return (
    <Container className="mt-5">
      <Card className="p-4 shadow">
        <Row className="align-items-center">
          
          {/* Image */}
          <Col md={5} className="text-center mb-3 mb-md-0">
            <img
              src={state.image}
              alt={state.title}
              className="img-fluid"
              style={{ maxHeight: "350px", objectFit: "contain" }}
            />
          </Col>

          {/* Details */}
          <Col md={7}>
            <h3 className="mb-3">{state.title}</h3>

            <p className="text-muted">
              {state.description}
            </p>

            <h4 className="text-success mb-2">
              ₹ {state.price}
            </h4>

            <p className="mb-3">
              ⭐ {state.rating.rate} / 5
            </p>

            <div className="d-flex gap-3">
              <Button variant="primary">Add to Cart</Button>
              <Button variant="success">Buy Now</Button>
            </div>
          </Col>

        </Row>
      </Card>
    </Container>
  )
}

export default ProductDetails
