import React from 'react'

const NavMenu = () => {
  return (
    <aside class="menu">
      <p class="menu-label">Menu</p>
      <ul class="menu-list">
        <li><a><i class="fas fa-tachometer-alt"></i> Dashboard</a></li>
        <li><a><i class="fas fa-book"></i> Books</a></li>
        <li><a><i class="fas fa-address-book"></i> Customers</a></li>
        <li><a><i class="fas fa-file-alt"></i> Orders</a></li>
      </ul>
    </aside>
  )
}

export default NavMenu