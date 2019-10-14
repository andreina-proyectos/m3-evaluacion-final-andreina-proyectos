import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterDetail = props => {
  const {rmData, routerProps} = props;
  const characterId = parseInt(routerProps.match.params.id);

  if(characterId > rmData.length) {
    return(
      <React.Fragment>
        <p className="message-route">Sólo tenemos 20 personajes!</p>
        <Link to="/" className="link__go-back">Go back!</Link>
      </React.Fragment>
    )
  }

  const cardClicked = rmData.find(item =>item.id === characterId);
  const isAlive = () => {
    if (cardClicked.status === 'Dead') {
      return(
        `Status: ${cardClicked.status}☠️`
      )}
    else if (cardClicked.status === 'Alive') {
      return(
        `Status: ${cardClicked.status}🤸🏼‍♀️`
      )}
      else{
        return(`Status: ${cardClicked.status}❓`)
      }
  };

  
  if(cardClicked) {
    const {name, image, species, origin, episode} = cardClicked;
    return (
      <React.Fragment>
        <Link to="/" className="link__go-back">Go back! <span role="img" aria-label="arrow to go back ">⬅️</span>
        </Link>
        <div className="app__detail">
          <div className="detail__card character__card">
            <div className="image-container">
              <img src={image} alt={`Imagen de ${name}`} className="detail__image"/>
            </div>
            <h2 className="character__name">{name}</h2>
            <p className="detail__status">{isAlive()}</p>  
            <p className="character__specie">{`Species: ${species}`}</p>  
            <p className="detail__origin">{`Origin: ${origin.name}`}</p>
            <p className="detail__episode">{`Episodes: ${episode.length}`}</p> 
          </div>
        </div>
      </React.Fragment>
    );
  }

  else{
    return(
      <React.Fragment>
        <p className="not-found-phrase">No tenemos este personaje</p>
        <Link to="/" className="link__go-back">Go back! <span role="img" aria-label="arrow to go back ">⬅️</span>
        </Link>
      </React.Fragment>  
    )
  }
};

CharacterDetail.propTypes = {
  rmData: PropTypes.arrayOf(PropTypes.object).isRequired,
  routerProps: PropTypes.object.isRequired,
};

export default CharacterDetail;