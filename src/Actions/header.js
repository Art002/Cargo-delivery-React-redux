import { getTransport } from './../FetchData/fetchData';
import { GET_TRANSPORT, SUBMENU_CLASSES, HIDE_SUBMENU } from './Const/const';

export function transportList(){
    return async dispatch => {
        try{
            const response = await getTransport()
            dispatch(fetchTransport(response.data))
        }catch(e){

        }
    }
}

export function fetchTransport(transport){
    return {
        type: GET_TRANSPORT,
        transport
    }
}

export function pushClasses(){
    return {
        type: SUBMENU_CLASSES
    }
}
export function hideSubMenu(){
    return {
        type: HIDE_SUBMENU
    }
}
