import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import filterReducer from './filterSlice';

const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const store = configureStore({ reducer });

export default store;
