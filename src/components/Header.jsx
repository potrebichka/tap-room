import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const header = {
        marginBottom: '20px',
        padding: '20px;'
    }
    const tapRoomName = {
        fontSize: '35px',
        marginRight: '20px',
        textDecoration: 'none',
        width: '40%',
        margin: '0 auto',
        display: 'block'
    }

    const nav = {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }

    const spacing = {
        fontSize: '20px',
        marginRight: '20px',
        textDecoration: 'none'
    }
    return (
        <header style={header}>
            <nav style={nav}>
                <Link to='/' style={tapRoomName}>Fort Epicodus Tap Room</Link>
                <Link to='/' style={spacing}>Home</Link>
                <Link to='/about-us' style={spacing}>About Us</Link>
                <Link to='/kegs-list' style={spacing}>Kegs List</Link>
                {/* <Link to='/portfolio' style={spacing}>Portfolio</Link>
                <Link to='/events' style={spacing}>Events</Link> */}
            </nav>
        </header>
    )
}

export default Header