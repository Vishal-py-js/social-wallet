import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk' 
import { chatReducer } from './Chat/Reducers';
import { homeTabreducer } from './HomeTab/Reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
  
const enhancer = composeEnhancers(applyMiddleware(
    thunk 
  ));

const rootReducer = combineReducers({ 
    homeTab: homeTabreducer,
    chat: chatReducer,
});
 

const store = createStore(
  rootReducer, 
  {},
  enhancer
);

export default store;