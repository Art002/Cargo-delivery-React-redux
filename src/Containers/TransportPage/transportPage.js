import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from "react-router";
import { getTransport } from './../../Selectors/selectors';
import classes from './transportPage.module.css';

const TransportPage = ({ transport, match }) => {
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

TransportPage.propTypes = {
    transport: PropTypes.array,
    match: PropTypes.object
  }

const mapStateToProps = state => {
    return {
        transport: getTransport(state)
    }
  }

export default connect(mapStateToProps)(withRouter(TransportPage))