// Axios
import axios from 'axios';

axios.get('https://swapi.co/api/people/1/')
    .then(res => res.data)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });