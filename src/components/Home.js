import React from 'react';
import Filters from './Filters'
import CharacterList from './CharacterList';

const Home = props => {
  const {handleInputChange, query, rmData} = props;
  return (
    <React.Fragment>
      <Filters
        handleInputChange={handleInputChange}
        query={query}
      />
      <CharacterList
        rmData={rmData}
        query={query} 
      />
    </React.Fragment>
    );
};

export default Home;