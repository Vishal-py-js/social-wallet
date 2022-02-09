import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk' 
import { homeTabreducer } from './HomeTab/Reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
  
const enhancer = composeEnhancers(applyMiddleware(
    thunk 
  ));

const rootReducer = combineReducers({ 
    homeTab: homeTabreducer,
});
 

const store = createStore(
  rootReducer, 
  {},
  enhancer
);

export default store;