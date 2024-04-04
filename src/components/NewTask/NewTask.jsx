import React, { useRef } from 'react'
import { addTask } from '../../actions/action_creators';
import { useDispatch } from 'react-redux';

export default function NewTask() {
    const taskInput = useRef(null);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(addTask({
            newTask: taskInput.current.value,
            taskState: 'incomplete'
        }))

        taskInput.current.value = ''
    }

  return (
    <div>
        <form action="#" onSubmit={handleSubmit}>
            <div className="formrow new-task-form">
                <input type="text" placeholder='Task...' className='new-task-box' ref={taskInput} required/>
                <button type="submit">Add</button>
            </div>
        </form>
    </div>
  )
}
