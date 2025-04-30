import React from 'react'
import './SortFilter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faSort } from '@fortawesome/free-solid-svg-icons'

const SortFilter = () => {
  return (
    <div className='main-container'>
      <div className='sort-dropdown-container'>
        <div className="sort-dropdown-label">
          sort by <FontAwesomeIcon icon={faSort} style={{color: "#0f1112"}} />
          <div className="dropdown-bridge"></div>
          <div className="sort-dropdown-menu">
            <div className='sort-option'>price: $ to $$$ </div>
            <div className='sort-option'>price: $$$ to $</div>
            <div className='sort-option'>name: A-Z</div>
            <div className='sort-option'>name: Z-A</div>
          </div>
        </div>
      </div>
      <div className='filter-dropdown-container'>
        <div className="filter-dropdown-label">
          filter <FontAwesomeIcon icon={faFilter} style={{color: "#0f1112"}} />
          <div className="dropdown-bridge"></div>
          <div className="filter-dropdown-menu">
            <div className='filter-option'>category 1</div>
            <div className='filter-option'>category 2</div>
            <div className='filter-option'>category 3</div>
            <div className='filter-option'>category 4</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SortFilter
