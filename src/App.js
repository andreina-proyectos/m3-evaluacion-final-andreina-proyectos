import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rmData:[]
    }
  }

  componentDidMount() {
    const endpoint = 'https://rickandmortyapi.com/api/character/';

    fetch(endpoint)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          rmData:data.results
        })
      })
  }

  render() {
    return (
      <div className="App">
        {this.state.rmData.map(item => {
          return(
            <ul className="character-list">
              <li className="character-element">
                <div className="image-container">
                  <img src={item.image} alt={`Imagen de ${item.name}`} className="character__image"/>
                </div>
                <h2 className="character__name">{item.name}</h2>
                <p className="character__specie">{item.species}</p>
              {/* <div>{item.name}</div> */}
              </li>
            </ul>
          )
        })}
      </div>
    );
  }
}

export default App;
