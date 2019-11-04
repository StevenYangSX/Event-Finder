import React, { Component } from 'react';
import Event from '../event/Event';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Events extends Component {
    render() {
        return (
           
                <Row className="row">
                    {this.props.events.map(event => (
                        // console.log("title is :"+ event.name), 
                        // console.log("intro is :"+ event.promoter.name), 
                        // console.log("time is :"+ event.dates.start.dateTime), 
                         console.log("check key is :"+ event),    
                        <Col>
                        <Event className="col" title={event.name} 
                        image={event.images[0].url} 
                        time={event.dates.start.dateTime}
                        eventId={event.id}
                        />
                        </Col>
                    ))}
                    
                </Row>
           
        )
    }
}

export default Events

