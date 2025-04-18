import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
            <div className="nav-left">
                <ul className="links">
                    <li className='link-items mega-menu-container'>categories ▼
                        <div className="mega-menu">
                            <div className="mega-column">
                                <h4>New & Trending</h4>
                                <a href="#">New Arrivals</a>
                                <a href="#">Best Sellers</a>
                                <a href="#">Only at Noice</a>
                            </div>
                            <div className="mega-column">
                                <h4>Shoes</h4>
                                <a href="#">Sneakers</a>
                                <a href="#">Loafers</a>
                                <a href="#">Boots</a>
                            </div>
                            <div className="mega-column">
                                <h4>Clothing</h4>
                                <a href="#">T-Shirts</a>
                                <a href="#">Hoodies</a>
                                <a href="#">Jackets</a>
                            </div>
                            <div className="mega-column">
                                <h4>Accessories</h4>
                                <a href="#">Bags</a>
                                <a href="#">Caps</a>
                                <a href="#">Sunglasses</a>
                            </div>
                        </div> 
                    </li>
                    <li className="link-items">
                        <a href="#">search</a>
                    </li>
                </ul>
            </div>
            <div className="brand-name"><a href="#">NOIRE & BLANC</a></div>
            <div className="nav-right">
                <ul className="links">
                    <li className='link-items'><a href="#">cart</a></li>
                    <li className='link-items'><a href="#">profile</a></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar