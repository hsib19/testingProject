import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import Account from './reducers/Account';

const rootReducer = combineReducers(
{ 
  dataAccount: Account ,
},
);

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
}

export default configureStore;