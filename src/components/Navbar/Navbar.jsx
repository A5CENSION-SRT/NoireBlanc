import React from 'react'
import './Navbar.css'
import ProductsData from '../../data/ProductData'
import { Link } from 'react-router-dom'

const Navbar = () => {
    
  return (
    <div>
        <nav className="navbar">
            <div className="nav-left">
                <ul className="links">
                    <li className='link-items mega-menu-container'>categories ▼
                        <div className="mega-menu">
                            <div className="mega-column">
                                <h4>24K Loadout</h4>
                                {ProductsData
                                  .filter(product => product.type === "24K Loadout")
                                  .map(product => (
                                    <Link to={`/products/${product.id}`} key={product.id}>
                                      {product.name}
                                    </Link>
                                  ))
                                }
                            </div>
                            <div className="mega-column">
                                <h4>Blacked Edition</h4>
                                {ProductsData
                                  .filter(product => product.type === "Blacked Edition")
                                  .map(product => (
                                    <Link to={`/products/${product.id}`} key={product.id}>
                                      {product.name}
                                    </Link>
                                  ))
                                }
                            </div>
                            <div className="mega-column">
                                <h4>Vanta Noir</h4>
                            {ProductsData
                            .filter(product => product.type === "Vanta Noir")
                            .map(product => (
                                <Link to={`/products/${product.id}`} key={product.id}>
                                    {product.name}
                                </Link>
                            ))
                            }
                            </div><div className="mega-column">
                                <h4>cat4</h4>
                                <a href="#">prod1</a>
                                <a href="#">pro2</a>
                                <a href="#">prod3</a>
                                <a href="#">prod4</a>
                            </div>
                        </div> 
                    </li>
                    <li className="link-items">
                        <a href="products">products</a>
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