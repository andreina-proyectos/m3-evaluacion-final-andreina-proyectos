import React from 'react';
import {Link} from 'react-router-dom';


const CharacterDetail = props => {
  const {rmData,query} = props;
    return (
        <React.Fragment>
            <div className="character-detail__container"> Soy el detalle </div>
            <h2 className="character__name">{rmData.name}</h2>  
            <Link to="/" className="link__go-back">Go back!</Link>
        </React.Fragment>
    );
};

export default CharacterDetail;