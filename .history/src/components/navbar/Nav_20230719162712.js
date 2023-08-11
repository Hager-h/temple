import React from "react"
import { Link } from 'react-router-dom'

import "./navStyle.css"
export default function Nav() {
  return (
  


    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
    <div className="container">
      <p className="navbar-brand logo-text" >First</p>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon "> </span>
          <i class="fa-solid fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse  " id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto">
          <Link className="nav-link " to="/">Home</Link>
          <Link className="nav-link" to="/work">Work</Link>
          <Link className="nav-link" to="/shop">Shop</Link>
          <Link className="nav-link" to="/feat">Features</Link>
          <Link className="nav-link" to="/profile">Profile</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
        </div>
      
      </div>
    </div>
  </nav>

















  )
}
