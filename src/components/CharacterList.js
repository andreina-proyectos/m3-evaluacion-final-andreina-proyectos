import React from 'react';
import CharacterCard from './CharacterCard';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterList = (props) => {
  const {rmData, query, gender, alien, human, origin} = props;

  return(
    <div className="app__list-container">
      <ul className="character-list">
      {rmData
        .filter(item => 
          item.origin.name.toUpperCase().includes(origin.toUpperCase())
        )
        .filter(item => {
          if(human && item.species === 'Human') {
            return true
          }
          else if(human && item.species !== 'Human') {
            return false
          }
          else {
            return true
          }
        })
        .filter(item => {
          if(alien && item.species === 'Alien') {
            return true
          }
          else if (alien && item.species !== 'Alien') {
            return false
          }
          else {
            return true
          }
        })
        .filter(item => gender===item.gender || gender==='all')
        .filter(item => item.name.toUpperCase().includes(query.toUpperCase()) )
        .map(item => {
          return(         
            <li key={item.id} className="character__card">
              <Link to={`/character-detail/${item.id}`}>
                <CharacterCard
                  name = {item.name}
                  img = {item.image}
                  species = {item.species}
                />
              </Link>
            </li> 
          )
        })
      }
    </ul>
  </div>
  )
}

CharacterList.propTypes = {
  rmData: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string.isRequired,
};

export default CharacterList;