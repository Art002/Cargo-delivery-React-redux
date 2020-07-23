import { ADD_CLASS, FILTER_REMOVE } from './../Actions/Const/const';

const initialState = {
    isSelected: [
        {name: 'underThree', label: 'До 3', isClicked: false},
        {name: 'threeToFive', label: 'От 3 до 5', isClicked: false},
        {name: 'fiveToTen', label: 'От 5 до 10', isClicked: false},
        {name: 'tenToFifteen', label: 'От 10 до 15', isClicked: false},
        {name: 'overFifteen', label: 'От 15', isClicked: false}
    ]
}

export default function filter(state = initialState, action){
    switch(action.type){
        case ADD_CLASS:
            return {
                ...state,
                isSelected: state.isSelected.map((item, i) => {
                    if(i === action.i){                       
                        return {
                            ...item,
                            isClicked: true
                        }
                    }else {
                        return {
                            ...item,
                            isClicked: false
                        }
                    }
                })
            }
        case FILTER_REMOVE:
            return {
                ...state,
                isSelected: state.isSelected.map((item, i) => {
                    if(i === action.i){                       
                            return {
                                ...item,
                                isClicked: false
                            }
                    }
                    return item
                })
            }
        default:
            return state
    }
}