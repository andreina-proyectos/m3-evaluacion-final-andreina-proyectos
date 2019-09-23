import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const {rmData} = props;
  return(
    <ul className="character-list">
      {rmData.map(item => {
        return(         
          <li key={item.id} className="character-element">
            <CharacterCard
            name = {item.name}
            img = {item.image}
            species = {item.species}
            />
          </li> 
        )
      })}
    </ul>
  )
}

export default CharacterList;