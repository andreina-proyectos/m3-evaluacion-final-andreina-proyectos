import React from 'react';
import CharacterCard from './CharacterCard';
import {Link} from 'react-router-dom';

const CharacterList = (props) => {
  const {rmData, query} = props;
  return(
    <ul className="character-list">
      {rmData
        .filter(item => {
          return(
            item.name.toUpperCase().includes(query.toUpperCase())
          )
        })
        .map(item => {
          return(         
            <li key={item.id} className="character-element">
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
  )
}

export default CharacterList;