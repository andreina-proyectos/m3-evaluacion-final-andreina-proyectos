import React from 'react';
import CharacterCard from './CharacterCard';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterList = (props) => {
  const {rmData, query, gender} = props;
  return(
  <div className="app__list-container">
    <ul className="character-list">
      {rmData
        .filter(item => {
            if(gender===item.gender) {
              return (
                true
              )
            }
            
            else if (gender==='all') {
              return(true)
            }

            else {
              return(false)
            }
        })

        .filter(item => {
          return(
            item.name.toUpperCase().includes(query.toUpperCase())
          )
        })
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