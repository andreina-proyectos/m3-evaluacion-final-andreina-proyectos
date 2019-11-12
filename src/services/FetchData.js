const endpoint = 'https://rickandmortyapi.com/api/character/';

const fetchData = () => {
    return fetch(endpoint).then(response => response.json())
}

export {fetchData};