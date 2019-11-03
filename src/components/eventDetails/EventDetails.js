import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class EventDetails extends Component {
    
    componentDidMount() {
        this.props.eventDetails(this.props.match.params.eventId);
    }
    
    
    render() {
        const {id, name} = this.props.event;
        return (
            <div>
                <Link to='/'><button>Back</button></Link>
                <p>Event with id:{id}</p>
                <p>{name}</p>
                <p>Location:  {this.props.event.promoter.id}</p>
                <a href={this.props.event.url} target="_blank">Go for Tickets</a>
            </div>
        )
    }
}

export default EventDetails
