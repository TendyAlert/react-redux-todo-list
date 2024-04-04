import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from "./action_constants";

export const addTask = (payload) => ({
    type: ADD_TASK,
    payload
})

export const deleteTask = (payload) => ({
    type: DELETE_TASK,
    payload
})

export const updateTasks = (taskId) => ({
    type: UPDATE_TASK,
    payload: taskId
})