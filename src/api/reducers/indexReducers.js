import { combineReducers } from 'redux';
import placeReducer from './placeReducer';

const rootReducers = combineReducers({
    places: placeReducer
});

export default rootReducers;