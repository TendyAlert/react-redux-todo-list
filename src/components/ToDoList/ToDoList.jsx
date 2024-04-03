import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import './ToDoList.css'

import NewTask from '../NewTask/NewTask'

export default function ToDoList() {

    const handleClick = (event) => {
        event.preventDefault();
    }


    const { id } = useParams();
    const taskType = id ?? 'All';

    const tasks = useSelector(state => state.tasks);

    const taskList = tasks
    .filter(task => String(task.id) === taskType || taskType === 'All')
    .map(task => (
        <li className='todo-item' key={task.id}>
            <div className='todo-check-box' htmlFor='taskCheckbox'>
                <input type="checkbox" id='taskCheckbox'/>
                { task.newTask }
                <span onClick={handleClick} className='delete-button'>X</span>
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
