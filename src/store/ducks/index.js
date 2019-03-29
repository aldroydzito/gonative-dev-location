import { combineReducers } from 'redux';

import markers from './markers';
import modal from './modal';

export default combineReducers({
  markers,
  modal,
});
