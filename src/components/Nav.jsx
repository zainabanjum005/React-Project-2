import React from 'react'

const Nav = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="\public\images\logo.png" alt="logo" />
        </div>

        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>

      </nav>
    </div>
  )
}

export default Nav
