import React, { FC } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter, RouteComponentProps } from "react-router";
import { getTransport } from './../../Selectors/selectors';
import { TransportItemType } from './../../Redusers/header';
import { RootState } from './../../Redusers/rootRedusers';
import classes from './transportPage.module.css';

type TransportPageParams = {
    id: string
}
type TransportPageRouterProps = RouteComponentProps<TransportPageParams>
type MapStatePropsTypes = {
    transport: Array<TransportItemType>
}
type PropsType = MapStatePropsTypes & TransportPageRouterProps

const TransportPage: FC<PropsType> = ({ transport, match }) => {
    const urlId = match.params.id
    const content = transport.map(({ id, content }) => {
        if(id === urlId){
            return (
                <div key={id} className={classes.transportPage}>
                    <div className={classes.imgBlock}>
                        <img src={require(`./../../Images/${id}.jpg`)}/>
                    </div>
                    <div className={classes.contentBlock}>
                        {content}
                    </div>
                </div>
            )
        }
    })
    return <div>{content}</div>
}

const mapStateToProps = (state: RootState): MapStatePropsTypes => {
    return {
        transport: getTransport(state)
    }
  }

export default compose(
    connect(mapStateToProps),
    withRouter
)(TransportPage) as FC