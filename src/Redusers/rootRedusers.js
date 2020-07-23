import { combineReducers } from 'redux';
import header from './header';
import mainContent from './mainContent';
import filter from './filter';

export default combineReducers({
    header,
    mainContent,
    filter
  })