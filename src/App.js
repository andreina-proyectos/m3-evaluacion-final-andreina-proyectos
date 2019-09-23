import React from 'react';
import './App.css';
import {FetchData} from './services/FetchData';
import CharacterList from './components/CharacterList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rmData:[]
    }
  }

  componentDidMount() {
    this.getFetchData();
  }

  getFetchData() {
    FetchData()
      .then(data => {
        this.setState({
          rmData:data.results
        })
      })
  }

  render() {
    const {rmData} = this.state;
    return (
      <div className="App">
        <h1 className="title">RICK AND MORTY CHARACTERS</h1>
        <CharacterList
          rmData={rmData}
        />
      </div>
    );
  }
}

export default App;
