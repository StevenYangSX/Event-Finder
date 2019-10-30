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
            <div className="container">
                <Form>
                    <input type="city" className="form-control" 
                            id="inputEmail3" placeholder="City" 
                            onChange={this.onChange}/>              
                    <button type="submit" className="btn btn-primary" onClick={this.onClick}>Search</button>
                </Form>
            </div>
        )
    }
}

export default Search
