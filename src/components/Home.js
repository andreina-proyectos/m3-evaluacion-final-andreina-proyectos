import React from 'react';
import Filters from './Filters'
import CharacterList from './CharacterList';
import PropTypes from 'prop-types';

const Home = props => {
  const {rmData, query, handleInputChange, gender, getUserGender, handleIsHuman, handleIsAlien, human, alien, handleChangeOrigin, origin} = props;
  return (
    <React.Fragment>
      <Filters
        getUserGender={getUserGender}
        handleInputChange={handleInputChange}
        query={query}
        handleIsHuman={handleIsHuman}
        handleIsAlien={handleIsAlien}
        handleChangeOrigin={handleChangeOrigin}
        origin={origin}
      />
      <CharacterList
        rmData={rmData}
        query={query} 
        gender={gender}
        human={human}
        alien={alien}
        origin={origin}
      />
    </React.Fragment>
    );
};

Home.propTypes = {
  rmData: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default Home;