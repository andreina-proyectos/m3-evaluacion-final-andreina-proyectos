import React from 'react';
import './index.scss';
import {fetchData} from './services/FetchData';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import CharacterDetail from './components/CharacterDetail';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rmData:[],
      query:'',
      gender:'all',
      human: false,
      alien: false,
      origin:'',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getUserGender = this.getUserGender.bind(this);
    this.handleIsHuman = this.handleIsHuman.bind(this);
    this.handleIsAlien = this.handleIsAlien.bind(this);
    this.handleChangeOrigin = this.handleChangeOrigin.bind(this);
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

  getUserGender(event) {
    const genderSelected = event.currentTarget.value;
    this.setState({
      gender: genderSelected
    })
  }

  handleIsHuman(event) {
    const isChecked = event.currentTarget.checked;
    this.setState({
      human: isChecked
    })
  }

  handleIsAlien(event) {
    const isChecked = event.currentTarget.checked;
    this.setState({
      alien: isChecked
    })
  }

  handleChangeOrigin(event) {
    const originSearched = event.currentTarget.value;
    this.setState({
      origin: originSearched,
    })
  }

  render() {
    const {rmData, query, gender, human, alien, origin} = this.state;
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
                gender={gender}
                getUserGender={this.getUserGender}
                handleIsHuman={this.handleIsHuman}
                handleIsAlien={this.handleIsAlien}
                human={human}
                alien={alien}
                handleChangeOrigin={this.handleChangeOrigin}
                origin={origin}
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
          <p className="footer__phrase">Created with <span role="img" aria-label="heart">❣️</span> by Andreina Romero García © in Adalab</p>
        </footer>
      </div>
    );
  }
}

export default App;
