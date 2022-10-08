import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to={'/'} className="navbar-brand">Todo</Link>

        </nav>
    )
}

export default Navbar
