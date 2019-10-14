import React from 'react';
import PropTypes from 'prop-types';

const Filters = (props) => {
  const {handleInputChange, query, getUserGender, handleIsHuman, handleIsAlien, handleChangeOrigin, origin} = props;
  
  return(
    <div className="app__filters">
      <label htmlFor="input">Busca tu personaje favorito por nombre o género </label>
      <input value={query} onChange={handleInputChange} id="input" type="text" className="filter" placeholder="                    Buscar🔎"/>

      <select className="filter__select" name="" id="" onChange={getUserGender}>
        <option value="all">All</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="unknown">Unknown</option>
      </select>

      <label htmlFor="human" className="filter-human">Human
      <input onChange={handleIsHuman} type="checkbox" name="" id="human"/>
      </label>
      <label htmlFor="human" className="filter-human">Alien
      <input onChange={handleIsAlien} type="checkbox" name="" id="human"/>
      </label>

      <label htmlFor="origin"></label>
      <input value={origin} onChange={handleChangeOrigin} id="origin"  type="text" className="filter-origin inputfilter" placeholder="Escribe un planeta"/>
    </div>
  )
}

Filters.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default Filters;