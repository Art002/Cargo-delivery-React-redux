import { getTransport } from '../FetchData/fetchData';
import { GET_TRANSPORT, SUBMENU_CLASSES, HIDE_SUBMENU } from './Const/const';
import { Dispatch } from 'redux';
import { TransportItemType } from './../Redusers/header';

export type HeaderActionsType = ReturnType<typeof fetchTransport>  
                              | ReturnType<typeof pushClasses> 
                              | ReturnType<typeof hideSubMenu> 


export const transportList = () => {
    return async (dispatch: Dispatch<HeaderActionsType>) => {
        try{
            const response = await getTransport()
            dispatch(fetchTransport(response.data))
        }catch(e){}
    }
}
export const fetchTransport = (transport: Array<TransportItemType>) => ({type: GET_TRANSPORT, transport} as const)
export const pushClasses = ()=> ({type: SUBMENU_CLASSES,subMenuListShow: 'subMenuListShow'} as const)
export const hideSubMenu = () => ({type: HIDE_SUBMENU,subMenuList: 'subMenuList'} as const)

