import { ADD_TASK } from "./action_constants";

export const addTask = (payload) => ({
    type: ADD_TASK,
    payload
})