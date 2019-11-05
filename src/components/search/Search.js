import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
class Search extends Component {
    
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
    render() {
        return (
            
                <Form>
                    <Form.Control size="sm" type="keyword" className="form-control" 
                            id="inputEmail3" placeholder="Keyword" 
                            onChange={this.onChange}/>              
                    <Button className="pull-right" type="submit" variant="dark" onClick={this.onClick}>Search</Button>
                </Form>
            
        )
    }
}

export default Search
