import { createStore } from 'redux';
import { combineReducers } from 'redux'
import {stockpile} from './stockpile/reducer'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({stockpile});

const persistConfig = {
    key: 'root',
    storage,
  };

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);