import React from 'react';

const Filters = (props) => {
  const {handleInputChange, query} = props;
  return(
    <div className="app__filters">
      <label htmlFor="input">Busca tu personaje favorito  </label>
      <input value={query} onChange={handleInputChange} id="input" type="text" className="filter"/>
    </div>
  )
}

export default Filters;