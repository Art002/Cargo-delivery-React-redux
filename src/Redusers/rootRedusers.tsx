import { combineReducers } from 'redux';
import header from './header';
import mainContent from './mainContent';
import filter from './filter';

const rootReducer = combineReducers({
    header,
    mainContent,
    filter
  })

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer