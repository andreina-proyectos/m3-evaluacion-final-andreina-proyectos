import React from 'react';
import './App.css';
import {FetchData} from './services/FetchData';
import CharacterList from './components/CharacterList';
import Filters from './components/Filters';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rmData:[],
      query:''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
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

  handleInputChange(event) {
      const query = event.currentTarget.value;
      this.setState({
        query: query
      })   
  }

  render() {
    const {rmData, query} = this.state;
    return (
      <div className="App">
        <h1 className="title">RICK AND MORTY CHARACTERS</h1>

        <Filters
        handleInputChange={this.handleInputChange}
        />

        <CharacterList
          rmData={rmData}
          query={query}
        />
      </div>
    );
  }
}

export default App;
