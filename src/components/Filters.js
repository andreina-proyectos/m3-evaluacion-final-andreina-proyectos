import React from 'react';
import PropTypes from 'prop-types';

const Filters = (props) => {
  const {handleInputChange, query} = props;
  return(
    <div className="app__filters">
      <label htmlFor="input">Busca tu personaje favorito </label>
      <input value={query} onChange={handleInputChange} id="input" type="text" className="filter" placeholder="                    Buscar🔎"/>
    </div>
  )
}

Filters.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default Filters;