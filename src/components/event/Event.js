import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
class Event extends Component {
    
    render() {
        return (
            // <div>
            //     <h4>{this.props.title}</h4>
            //     <p>{this.props.intro}</p>
            //     <p>{this.props.time}</p>
            //     <img src={this.props.image} alt=""/>
            // </div>
            <div className="card">
            <img className="card-img-top" src={this.props.image} alt=""/>
            <div className="card-body">
                <h4 className="card-title">{this.props.title}</h4>
                <p className="card-text">{this.props.time}</p>
                <p className="card-text">{this.props.intro}</p>
                <a href="#!" className="btn btn-primary">Go somewhere</a>
                
            </div>
            </div>

        )
    }
}

export default Event