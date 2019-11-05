import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

class Event extends Component {
    
    render() {
        return (
            // <div>
            //     <h4>{this.props.title}</h4>
            //     <p>{this.props.intro}</p>
            //     <p>{this.props.time}</p>
            //     
            // </div>
            <div className="card flex-column">       
                <img className="card-img-top" src={this.props.image} alt=""/>    
                <div className="card card-body h-100 flex-column">
                    <h4 className="card-title h-100">{this.props.title}</h4>
                    <p className="card-text ">{this.props.time}</p>
                    <Link to={`/event/${this.props.eventId}`} className="btn btn-dark">Details</Link>   
                </div>
            </div>

        )
    }
}

export default Event