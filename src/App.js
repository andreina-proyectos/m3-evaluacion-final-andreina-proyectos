import React from 'react';
import './App.css';
import {fetchData} from './services/FetchData';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import CharacterDetail from './components/CharacterDetail';

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
    fetchData()
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

        <Switch>
          <Route exact path="/" render={() => {
            return (
              <Home
                handleInputChange={this.handleInputChange}
                rmData={rmData}
                query={query}
              />
            )
          }} 
          />

          <Route path="/character-detail/:id" render={(routerProps)=> {
            return(
              <CharacterDetail
              routerProps={routerProps}
              rmData={rmData}
              />
            )
          }} 
          />
        </Switch>

      </div>
    );
  }
}

export default App;
