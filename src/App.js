import React from 'react';
import './index.scss';
import {fetchData} from './services/FetchData';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import CharacterDetail from './components/CharacterDetail';
import {Link} from 'react-router-dom';

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
        <header className="app__header">
          <Link className="app__title-link" to="/">
            <h1 className="app__title">RICK AND MORTY CHARACTERS</h1>
          </Link>
        </header>
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
        <footer className="app__footer">
          <p className="footer__phrase">Created with <span role="img" aria-label="heart">❣️</span> by Andreina Romero García in Adalab</p>
        </footer>
      </div>
    );
  }
}

export default App;
