import React from 'react'
import {Navbar, Container, Nav} from "react-bootstrap";
const NavBar = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">MERN APP</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
            <Nav.Link href="/add">Add</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default NavBar