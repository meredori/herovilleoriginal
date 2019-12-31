import { createStore } from 'redux';
import { combineReducers } from 'redux'
import {stockpile} from './stockpile/reducer'
import {buildings} from './buildings/reducer'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({stockpile, buildings});

const persistConfig = {
    key: 'root',
    storage,
  };

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);