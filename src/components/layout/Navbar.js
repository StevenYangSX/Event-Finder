import React, { useState } from "react"
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const NavBar = props => {
  const [city, setCity] = useState("")

  const onChange = e => {
    setCity(e.target.value)
  }
  const onClick = e => {
    e.preventDefault()
    props.onClick(city)
    setCity("")
  }

  return (
    <Navbar bg="dark" expand="md" variant="dark">
      <Navbar.Brand href="/">
        <i className="fas fa-icons"></i> Event Finder
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="artists"
            className="mr-sm-2"
            onChange={onChange}
          />
          <Button variant="secondary" onClick={onClick}>
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
