const endpoint = 'https://rickandmortyapi.com/api/character/';

const FetchData = () => {
    return fetch(endpoint).then(response => response.json())
}

export {FetchData};