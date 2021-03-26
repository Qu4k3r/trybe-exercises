import { combineReducers } from 'redux';
import clientReducer from './clientReducer'

const rootReducer = combineReducers({
  clientReducer,
})

export default rootReducer;
