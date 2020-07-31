import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { click, hideFilter } from './../../Actions/filter';
import { getTransport, getIsSelected } from './../../Selectors/selectors';
import classes from './filter.module.css';

let cx = classNames.bind(classes);

const Filter = ({ isSelected, click, hideFilter }) => {
    const selected = isSelected.map(({ isClicked, label, name }, i) => {
        return (
            <li className={cx(
                'filterListItem',
                {'itemClicked': isClicked}
            )}
                onClick={!isClicked ? () => click(i, name) : () => hideFilter(i)}
                key={name}>
                {label}
            </li>
        )
    })
    return (
        <div className={classes.filterWrapper}>
            <div className={classes.filterBlock}>
                <h4>Выберите тоннаж:</h4>
                <ul className={classes.filterList}>
                    {selected}
                    
                </ul>
            </div>
        </div>
    )
}

Filter.propTypes = {
    isSelected: PropTypes.array,
    click: PropTypes.func,
    hideFilter: PropTypes.func
  }

const mapStateToProps = state => {
    return {
        transport: getTransport(state),
        isSelected: getIsSelected(state)
    }
  }
const mapDispatchToProps = (dispatch) => {
    return {
        click: (i, name) => dispatch(click(i, name)),
        hideFilter: (i) => dispatch(hideFilter(i))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
