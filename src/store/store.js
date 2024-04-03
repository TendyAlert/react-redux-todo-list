import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from '../reducers/tasksReducer'



const inititalState = {
  tasks: [],
  nextTaskId: 1
}

const rootReducer = (state = inititalState, action) => tasksReducer(state, action);


const store = configureStore({ reducer: rootReducer });

export default store;