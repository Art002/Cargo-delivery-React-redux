import axios from 'axios';

 export const getTransport = () => {
    return axios.get('https://cargo-delivery-d444c.firebaseio.com/-MCScOWCiHuMnqLFgrbT.json')
}

