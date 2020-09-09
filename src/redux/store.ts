import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/root_reducer';
import thunk from 'redux-thunk';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
