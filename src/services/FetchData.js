const endpoint = 'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json';

const fetchData = () => {
    return fetch(endpoint).then(response => response.json())
}

export {fetchData};