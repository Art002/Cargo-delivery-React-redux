import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TransportPlate from './../../Components/Content/transportPlate';
import { addToCart } from './../../Actions/mainContent';
import classes from './mainContent.module.css';

const MainContent = ({ transport, addToCart }) => {
    const content = transport.map(({ name, content, className, id }) => {
        return <TransportPlate key={id} 
                               name={name} 
                               content={content} 
                               clas={className}
                               id={id}
                               addToCart={addToCart} />
    })
    return (
        <div className={classes.wrapper}>
            <div className={classes.contentBlock}>{content}</div>
        </div>
    )
}

MainContent.propTypes = {
    transport: PropTypes.array,
    addToCart: PropTypes.func
  }

const mapStateToProps = state => {
    return {
        transport: state.header.transport
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainContent)