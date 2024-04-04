import { ADD_TASK, DELETE_TASK, UPDATE_TASK, UPDATE_FORM } from "./action_constants";

//*********************************//
//********* TASK CREATORS *********//
//*********************************//

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

//*********************************//
//********* FORM CREATORS *********//
//*********************************//


export const updateForm = (fieldName, fieldValue) => ({
    type: UPDATE_FORM,
    payload: {
        fieldName,
        fieldValue
    }
})