import React, { useContext } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import EventsContext from "../../context/events/eventsContext";

const NavBar = () => {
  const eventsContext = useContext(EventsContext);
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
        <Form inline onSubmit={eventsContext.onSubmit}>
          <FormControl
            type="text"
            placeholder="artists"
            className="mr-sm-2"
            onChange={eventsContext.onChange}
          />
          <Button type="submit" variant="secondary">
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
