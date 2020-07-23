import { CHANGE_VALUE } from './Const/const';

export function changeValue(value, i){
    const normalize = Math.min(Math.max(value, 1), 10)
    return {
        type: CHANGE_VALUE,
        normalize,
        i
    }
}