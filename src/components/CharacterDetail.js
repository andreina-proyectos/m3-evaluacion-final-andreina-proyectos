import React from 'react';
import {Link} from 'react-router-dom';


const CharacterDetail = props => {
  const {rmData, routerProps} = props;
  console.log(routerProps);
  const routerPropId = parseInt(routerProps.match.params.id);
  console.log(routerPropId);
  const cardClicked = rmData.find(item => {
    return(
      item.id === routerPropId
    )
  })

  console.log(cardClicked);
  const {name, image, species, status, origin, episode} = cardClicked;
    return (
        <React.Fragment>
          <div className="character-detail__container">
            <div className="image-container">
              <img src={image} alt={`Imagen de ${name}`} className="character__image"/>
            </div>
            <h2 className="character__name">{name}</h2>
            <p className="character__status">{status}</p>  
            <p className="character__specie">{species}</p>  
            <p className="character__origin">{origin.name}</p>
            <p className="character__origin">{episode.length}</p>  
            <Link to="/" className="link__go-back">Go back!</Link>
          </div>
        </React.Fragment>
    );
};

export default CharacterDetail;