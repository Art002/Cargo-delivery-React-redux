import React, { FC } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { ThunkDispatch } from "redux-thunk";
import { click, hideFilter, FilterActionsType } from './../../Actions/filter';
import { getTransport, getIsSelected } from './../../Selectors/selectors';
import { RootState } from './../../Redusers/rootRedusers';
import { TransportItemType } from './../../Redusers/header';
import { IsselectedType } from './../../Redusers/filter';
import classes from './filter.module.css';

let cx = classNames.bind(classes);

type MapDispatchPropsType = {
    click: (i: number, name: string) => void,
    hideFilter: (i: number) => void
}
type MapStatePropsTypes = {
    transport: Array<TransportItemType>,
    isSelected: Array<IsselectedType>
}
type PropsType = MapDispatchPropsType & MapStatePropsTypes

const Filter: FC<PropsType> = ({ isSelected, click, hideFilter }) => {
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

const mapStateToProps = (state: RootState): MapStatePropsTypes => {
    return {
        transport: getTransport(state),
        isSelected: getIsSelected(state)
    }
  }
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, FilterActionsType>): MapDispatchPropsType => {
    return {
        click: (i, name) => dispatch(click(i, name)),
        hideFilter: (i) => dispatch(hideFilter(i))
    }
  }

export default connect<MapStatePropsTypes, MapDispatchPropsType, null, RootState>(
    mapStateToProps, 
    mapDispatchToProps
)(Filter)
