import { createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'; //remover en "Production" !!!!
import thunk from 'redux-thunk';
import rootReducers from './reducers/indexReducers';

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));