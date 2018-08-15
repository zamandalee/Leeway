import { combineReducers } from 'redux';
import entities from './entities_reducer';
import errors from './errors_reducer';
import session from './session_reducer';
import ui from './ui_reducer';

const rootReducer = combineReducers({
  entities,
  errors,
  session,
  ui
});

export default rootReducer;
