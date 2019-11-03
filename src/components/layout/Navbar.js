import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light" style={myStyle}>
            <h3>Event Finder</h3>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

const myStyle = {backgroundColor: '#e3f2fd'}