import { ADD_TASK, DELETE_TASK } from "../actions/action_constants";


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
    } else if (action.type === DELETE_TASK) {
        const newTasks = state.tasks.filter(task => task.id != action.payload);
        return {
            tasks: newTasks,
            nextTaskId:state.nextTaskId
        }
    }
    return state;
}