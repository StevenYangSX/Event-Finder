import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

class EventDetails extends Component {
    state = {
        event: {},
        loading : true
    }

    eventDetails = async (eventId) => {
        console.log("eventId is:!!!:", eventId)
        const res = await axios.get(`https://app.ticketmaster.com/discovery/v2/events/${eventId}.json?&apikey=d5jyQtKEHAXiqyDMCSVsdid5ooEqm5Pg`)
        //const res =  await response.json();
       
        this.setState({event: res.data,loading: false});
        console.log("event object is:!!!:", res.data)
      }
    
    componentDidMount() {
        this.eventDetails(this.props.match.params.eventId);
        
    }
    
   
    
    render() {
        const {id, name} = this.state.event;
        if(this.state.loading === false) {
            return (
        
                <div>
                    <Link to='/'><button>Back</button></Link>
                    <p>Event with id:{id}</p>
                    <p>Time: {this.state.event.dates.start.localTime} {this.state.event.dates.start.localDate}</p>
                    <p>Location:  {this.state.event._embedded.venues[0].city.name}, {this.state.event._embedded.venues[0].country.name}</p>

                    <a href={this.state.event.url} target="_blank">Go for Tickets</a>
                </div>
            )
    
        }else {
            return (
                <div>
                    <p>Loading...</p>
                </div>
            )
        }
        
    }
}

export default EventDetails
