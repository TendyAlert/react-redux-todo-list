import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Trash } from 'react-bootstrap-icons'

import './ToDoList.css'

import NewTask from '../NewTask/NewTask'
import { deleteTask } from '../../actions/action_creators'

export default function ToDoList() {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    const handleClick = (event) => {
        event.preventDefault();
        const targetKey = event.target.dataset.id;
        console.log(targetKey)
        dispatch(deleteTask(targetKey))
    }

    const { id } = useParams();
    const taskType = id ?? 'All';

    const taskList = tasks
    .filter(task => String(task.id) === taskType || taskType === 'All')
    .map(task => (
        <li className='todo-item' key={task.id}>
            <div className='todo-check-box' htmlFor='taskCheckbox'>
                <input type="checkbox" id='taskCheckbox'/>
                <span className='task-text'>{ task.newTask }</span>
                <Trash onClick={handleClick} className='delete-button' data-id={task.id}/>
            </div>
        </li>
))
  return (
    <div>
        <NewTask />
        <div className='todo-list-container'>
            <ul className='todo-list'>
                {taskList}
            </ul>
        </div>
    </div>
  )
}
