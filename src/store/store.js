import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import tasksReducer from '../reducers/tasksReducer'
import formReducer from "../reducers/formReducer";


const rootReducer = combineReducers({
  tasks: tasksReducer,
  form: formReducer
});


const store = configureStore({ reducer: rootReducer });

export default store;