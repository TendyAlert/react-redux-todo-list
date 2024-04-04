import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from "../actions/action_constants";


const inititalState = {
    tasks: [],
    taskState: 'incomplete',
    nextTaskId: 1
  }

export default function tasksReducer(state = inititalState, action) {
    if (action.type === ADD_TASK) {
        const newTask = {
            ...action.payload,
            taskState: "incomplete", // Set default taskState to "incomplete"
            id: state.nextTaskId
        };
    
        return {
            ...state,
            tasks: [...state.tasks, newTask],
            nextTaskId: state.nextTaskId + 1
        };
    } else if (action.type === DELETE_TASK) {
        // eslint-disable-next-line
        const newTasks = state.tasks.filter(task => task.id != action.payload);
        return {
            tasks: newTasks,
            nextTaskId:state.nextTaskId
        }
    } else if (action.type === UPDATE_TASK) {
        const updatedTasks = state.tasks.map(task => {
            if (task.id === action.payload) {
                return {
                    ...task,
                    taskState: task.taskState === 'incomplete' ? 'complete' : 'incomplete'
                };
            }
            return task;
        });

        return {
            ...state,
            tasks: updatedTasks
        };
    }
    return state;
}