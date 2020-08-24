import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import TransportPlate from './../../Components/Content/transportPlate';
import { addToCart } from './../../Actions/mainContent';
import { getTransport } from './../../Selectors/selectors';
import { TransportItemType } from './../../Redusers/header';
import { RootState } from './../../Redusers/rootRedusers';
import { MainContentType } from './../../Actions/mainContent';
import classes from './mainContent.module.css';

type MapDispatchPropsType = {
    addToCart: (id: string) => void
  }
type MapStatePropsTypes = {
    transport: Array<TransportItemType> 
}
type PropsType = MapDispatchPropsType & MapStatePropsTypes

const MainContent: FC<PropsType> = ({ transport, addToCart }) => {
    const content = transport.map(({ name, content, className, id }) => {
        return <TransportPlate key={id} 
                               name={name} 
                               content={content} 
                               clas={className}
                               id={id}
                               addToCart={addToCart} 
                />
    })
    return (
        <div className={classes.wrapper}>        
                <div className={classes.contentBlock}>{content}</div>
        </div>
    )
}

const mapStateToProps = (state: RootState): MapStatePropsTypes => {
    return {
        transport: getTransport(state)
    }
}
const mapDispatchToProps = (dispatch: Dispatch<MainContentType>): MapDispatchPropsType => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
}
export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(MainContent)