import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
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
                    <input type="keyword" className="form-control" 
                            id="inputEmail3" placeholder="Keyword" 
                            onChange={this.onChange}/>              
                    <button type="submit" className="btn btn-primary" onClick={this.onClick}>Search</button>
                </Form>
            
        )
    }
}

export default Search
