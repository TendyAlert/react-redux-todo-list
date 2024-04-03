import { ADD_TASK } from "../actions/action_constants";


export default function tasksReducer(state, action) {
    if (action.type === ADD_TASK) {
        const newTasks = [
            ...state.tasks,
            {...action.payload, id: state.nextTaskId}
        ]
        return {
            tasks: newTasks,
            nextTaskId: state.nextTaskId + 1
        }
    }
    return state;
}