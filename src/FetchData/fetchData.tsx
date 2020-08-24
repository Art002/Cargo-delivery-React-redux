import axios from 'axios';
import { TransportItemType } from './../Redusers/header';

export const getTransport = () => {
    return axios.get<Array<TransportItemType>>('https://cargo-delivery-d444c.firebaseio.com/-MCScOWCiHuMnqLFgrbT.json')
}

