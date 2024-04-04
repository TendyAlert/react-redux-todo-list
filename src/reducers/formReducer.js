import { UPDATE_FORM } from "../actions/action_constants";

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    comments: ''
  };

export default function formReducer(state = initialState, action) {
    if (action.type === UPDATE_FORM) {
        console.log(state);
        return {
            ...state,
            [action.payload.fieldName]: action.payload.fieldValue
        }
    }
    return state;
}