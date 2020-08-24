import React , { useEffect, FC } from 'react';
import { connect  } from 'react-redux';
import { ThunkDispatch } from "redux-thunk";
import { transportList, pushClasses, hideSubMenu } from './../../Actions/header';
import Logo from '../../Components/Header/Logo/logo';
import Nav from '../../Components/Header/Nav/nav';
import { getTransport, getSubMenuClasses } from './../../Selectors/selectors';
import { RootState } from './../../Redusers/rootRedusers';
import { HeaderActionsType } from './../../Actions/header';
import { TransportItemType } from './../../Redusers/header';
import classes from './header.module.css';

type MapDispatchPropsType = {
    getTransportList: () => void,
    pushClasses: () => void,
    hideSubMenu: () => void
}
type MapStatePropsTypes = {
    transport: Array<TransportItemType>,
    subMenuClasses: Array<string>
}
type PropsType = MapDispatchPropsType & MapStatePropsTypes

const Header: FC<PropsType> = ({ getTransportList, transport, pushClasses, subMenuClasses, hideSubMenu }) => {
    useEffect(() => {
        getTransportList()
    }, [])
    return(
        <header className={classes.header}>
            <Logo />
            <Nav transport={transport}
                 subMenuClasses={subMenuClasses} 
                 pushClasses={pushClasses}
                 hideSubMenu={hideSubMenu}/>
            <hr className={classes.greadientBorder}/>
        </header>
    ) 
}

const mapStateToProps = (state: RootState): MapStatePropsTypes => {
    return {
        transport: getTransport(state),
        subMenuClasses: getSubMenuClasses(state)
    }
  }
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, HeaderActionsType>): MapDispatchPropsType => {
    return {
        getTransportList: () => dispatch(transportList()),
        pushClasses: () => dispatch(pushClasses()),
        hideSubMenu: () => dispatch(hideSubMenu())
    }
  }

export default connect<MapStatePropsTypes, MapDispatchPropsType, null, RootState>(
    mapStateToProps, 
    mapDispatchToProps
)(Header)