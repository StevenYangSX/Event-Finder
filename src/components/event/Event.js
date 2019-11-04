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
            //     <img src={this.props.image} alt=""/>
            // </div>
            <div className="card card-block">

  
        <div id="carouselFadeExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                <img className="card-img-top" src={this.props.image} alt=""/>
                </div>
                <div class="carousel-item">
                <img className="card-img-top" src={this.props.image} alt=""/>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselFadeExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselFadeExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        </div>




              
                <div className="card-body">
                    <h4 className="card-title">{this.props.title}</h4>
                    <p className="card-text">{this.props.time}</p>
                    <p>{this.props.eventId}</p>
                    <Link to={`/event/${this.props.eventId}`} className="btn btn-primary">Details</Link>
                    
                </div>
            </div>

        )
    }
}

export default Event