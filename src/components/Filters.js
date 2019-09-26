import React from 'react';
import PropTypes from 'prop-types';

const Filters = (props) => {
  const {handleInputChange, query, gender, handleGender} = props;
  return(
    <div className="app__filters">
      <label htmlFor="input">Busca tu personaje favorito </label>
      <input value={query} onChange={handleInputChange} id="input" type="text" className="filter" placeholder="                    Buscar🔎"/>


      <select value={gender} onChange={handleGender} name="" id="" className="select-gender">
        <option value="all">All</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="unknown">Unknown</option>
      </select>

    </div>
  )
}

Filters.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default Filters;