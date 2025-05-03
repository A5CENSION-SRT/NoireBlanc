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
                                <h4>Ironclad Series</h4>
                                {ProductsData
                                .filter(product => product.type === "Ironclad Series")
                                .map(product =>(
                                    <Link to={`/products/${product.id}`} key={product.id}>
                                        {product.name}
                                    </Link>
                                ))}
                            </div>
                        </div> 
                    </li>
                    <li className="link-items">
                        <Link to= "/products">products</Link>
                    </li>
                </ul>
            </div>
            <div className="brand-name"><Link to = {`/home`}>NOIRE & BLANC</Link></div>
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