import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterDetail = props => {
  const {rmData, routerProps} = props;
  const characterId = parseInt(routerProps.match.params.id);

  if(characterId > rmData.length) {
    return('Sólo tenemos 20 personajes!')
  }
  else {};

  const cardClicked = rmData.find(item =>item.id === characterId);

  if(cardClicked) {
    const {name, image, species, status, origin, episode} = cardClicked;
    return (
      <React.Fragment>
        <Link to="/" className="link__go-back">Go back!</Link>
        <div className="character-detail__container">
          <div className="image-container">
            <img src={image} alt={`Imagen de ${name}`} className="character__image"/>
          </div>
          <h2 className="character__name">{name}</h2>
          <p className="character__status">{`Status: ${status}`}</p>  
          <p className="character__specie">{`Species: ${species}`}</p>  
          <p className="character__origin">{`Origin: ${origin.name}`}</p>
          <p className="character__episode">{`Episodes: ${episode.length}`}</p> 
        </div>
      </React.Fragment>
    );
  }
  else{
    return(
      <React.Fragment>
        <p className="not-found-phrase">No tenemos este personaje</p>
        <Link to="/" className="link__go-back">Go back!</Link>
      </React.Fragment>  
    )
  }
};

CharacterDetail.propTypes = {
  rmData: PropTypes.arrayOf(PropTypes.object).isRequired,
  routerProps: PropTypes.object.isRequired,
};

export default CharacterDetail;