import React from 'react';

const CharacterCard = (props) => {
  const {name, img, species} = props;
  return(
    <div className="card">
      <div className="image-container">
        <img src={img} alt={`Imagen de ${name}`} className="character__image"/>
      </div>
      <h2 className="character__name">{name}</h2>
      <p className="character__specie">{species}</p>
    </div>
  )
}
 
export default CharacterCard;