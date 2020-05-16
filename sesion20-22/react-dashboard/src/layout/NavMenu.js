import React from 'react'
import { Link } from "react-router-dom"

const NavMenu = () => {
  return (
    <aside className="menu">
      <p className="menu-label">Menu</p>
      <ul className="menu-list">
        <li><Link to=""><i className="fas fa-tachometer-alt"></i> Dashboard</Link></li>
        <li><Link to="/books"><i className="fas fa-book"></i> Books</Link></li>
        <li><a><i className="fas fa-address-book"></i> Customers</a></li>
        <li><a><i className="fas fa-file-alt"></i> Orders</a></li>
      </ul>
    </aside>
  )
}

export default NavMenu