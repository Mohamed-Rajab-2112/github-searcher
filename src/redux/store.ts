import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import rootReducer from './reducers/root_reducer';
import thunk from 'redux-thunk';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);
let persistor = persistStore(store as any);

export { store, persistor };
