// const endpoint = 'https://rickandmortyapi.com/api/character/';
const endpoint = 'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json';

const FetchData = () => {
    return fetch(endpoint).then(response => response.json())
}

export {FetchData};