import React from 'react';
import Filters from './Filters'
import CharacterList from './CharacterList';
import PropTypes from 'prop-types';

const Home = props => {
  const {rmData, query, handleInputChange, gender, getUserGender} = props;
  return (
    <React.Fragment>
      <Filters
        getUserGender={getUserGender}
        handleInputChange={handleInputChange}
        query={query}
      />
      <CharacterList
        rmData={rmData}
        query={query} 
        gender={gender}
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