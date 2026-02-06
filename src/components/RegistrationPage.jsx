import React from "react"
import { useState } from "react"
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

const RegistrationPage = () => {
  let navigate = useNavigate()
  const [form, setForm] = useState({ name: "", email: "", password: "" })
  let change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  console.log(form)
  let register = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.password) {
      alert("all fields are mandatory..")
      return
    }
    let res = await axios.get(`http://localhost:4040/users?email=${form.email}`)
    if (res.data.length > 0) {
      alert("user already exist")
      return
    }
    await axios.post(`http://localhost:4040/users`, form)
    console.log("Registration successfull.")
    navigate("/login")
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <Card className="p-4 shadow">
            <h3 className="text-center mb-4">Register</h3>

            <Form onSubmit={register}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  onChange={change}
                // required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={change}
                // required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Create password"
                  onChange={change}
                // required
                />
              </Form.Group>

              <Button variant="success" type="submit" className="w-100 mb-3">
                Register
              </Button>

              <div className="text-center">
                <span>Already have an account? </span>
                <Link to="/login">Login</Link>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default RegistrationPage
