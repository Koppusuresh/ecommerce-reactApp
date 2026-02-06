import React, { useState } from "react"
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap"
import { Link ,useNavigate} from "react-router-dom"
import axios from "axios"

const LoginPage = () => {
  let navigate=useNavigate()
  let [form,setForm]=useState({email:"",password:""})
  let change=(e)=>{
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  console.log(form)
  const handleSubmit = async (e) => {
     if (!form.email || !form.password) {
      alert("all fields are mandatory..")
      return
    }
    e.preventDefault()
    let res = await axios.get(`http://localhost:4040/users?email=${form.email}`)
    if(res.data.length===0){
      alert("user is not existed")
    }
    let user = await axios.get(`http://localhost:4040/users`)
    console.log(user)
    if(user.data[0].password!=form.password)
    {
      alert("invalid password")
    }
    // handle login logic here
    // console.log("Login submitted")
    navigate("/")


  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <Card className="p-4 shadow">
            <h3 className="text-center mb-4">Login</h3>

            <Form onSubmit={handleSubmit}>
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
                  placeholder="Enter password"
                  onChange={change}
                  // required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>
              <div className="text-center">
                <span>Dont have an account? </span>
                <Link to="/register">Register</Link>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginPage
