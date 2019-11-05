import React,{Component} from 'react';
import {Navbar , Nav, Form,FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends Component {
    state = {
        city : '',
      }

    onChange = (e) => {
        this.setState({city: e.target.value}) 
    }
    onClick = e => {
        e.preventDefault();
        this.props.onClick(this.state.city);
        this.setState({city: ''});
    }
    render(){
        return (
            <Navbar bg="dark" expand="md" variant="dark">
                <Navbar.Brand href="/"><i className="fas fa-icons"></i> Event Finder</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="artists" className="mr-sm-2" onChange={this.onChange} />
                        <Button  variant="secondary" onClick={this.onClick}>Search</Button>
                   
                    </Form>
                </Navbar.Collapse>
            </Navbar>
          )
    }
    
    }

export default NavBar

