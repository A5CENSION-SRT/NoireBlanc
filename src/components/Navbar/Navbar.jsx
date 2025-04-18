import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
            <div className="nav-left">
                <ul className="links">
                    <li className='link-items'>
                        <a href="#" className='link-a-items'>categories</a>
                    </li>
                    <li className="link-items">
                        <a href="#">search</a>
                    </li>
                </ul>
            </div>
            <div className="brand-name"><a href="#">NOIRE & BLANC</a></div>
            <div className="nav-right">
                <ul class="links">
                    <li className='link-items'><a href="#">cart</a></li>
                    <li className='link-items'><a href="#">profile</a></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
