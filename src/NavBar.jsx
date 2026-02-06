import { Link, NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Banner from './Banner';
import { createContext,useState } from 'react';
import SearchContext from './SearchContext';
const data=createContext();
const NavBar = () => {
    let [search,setSearch]=useState("")
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">MyShop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2" as={Link} to="/about">About</Nav.Link>
                            <Nav.Link href="#action2">Gallery</Nav.Link>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex align-items-center gap-2">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success" >Search</Button>
                            <Button as={Link} to="/login" variant="primary">Login</Button>
                            <Button as={Link} to="/register" variant="secondary">Register</Button>
                        </Form>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {
                <data.Provider value={search}> <SearchContext/></data.Provider>
            }
            {/* <Banner /> */}

        </div>
    )
}


export {data,NavBar}
