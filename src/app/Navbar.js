import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>Biostoom application</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/dashboard">dashboard</Link>
            <Link to="/login">login</Link>
            <Link to="/company">company</Link>
            <Link to="/employee">employee</Link>
            <Link to="/workpermit">workpermit</Link>
          </div>
        </div>
      </section>
    </nav>
  )
}
