import React from 'react'
import './SortFilter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faSort } from '@fortawesome/free-solid-svg-icons'

const SortFilter = ({ sortOption, setSortOption, filterOption, setFilterOption }) => {
  return (
    <div className='main-container'>
      <div className='sort-dropdown-container'>
        <div className="sort-dropdown-label">
          sort by <FontAwesomeIcon icon={faSort} style={{color: "#0f1112"}} />
          <div className="dropdown-bridge"></div>
          <div className="sort-dropdown-menu">
            <div className='sort-option' onClick={() => setSortOption('p-asc')}>price: $ to $$$ </div>
            <div className='sort-option' onClick={() => setSortOption('p-des')}>price: $$$ to $</div>
            <div className='sort-option' onClick={() => setSortOption('name-asc')}>name: A-Z</div>
            <div className='sort-option' onClick={() => setSortOption('name-des')}>name: Z-A</div>
          </div>
        </div>
      </div>
      <div className='filter-dropdown-container'>
        <div className="filter-dropdown-label">
          filter <FontAwesomeIcon icon={faFilter} style={{color: "#0f1112"}} />
          <div className="dropdown-bridge"></div>
          <div className="filter-dropdown-menu">
            <div className='filter-option' onClick={() => setFilterOption('all')}>all</div>
            <div className='filter-option' onClick={() => setFilterOption('24K Loadout')}>24K loadout</div>
            <div className='filter-option' onClick={() => setFilterOption('Blacked Edition')}>Blacked edition</div>
            <div className='filter-option' onClick={() => setFilterOption('category 3')}>category 3</div>
            <div className='filter-option' onClick={() => setFilterOption('category 4')}>category 4</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SortFilter
