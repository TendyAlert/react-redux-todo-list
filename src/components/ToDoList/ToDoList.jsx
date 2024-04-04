import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { Trash } from 'react-bootstrap-icons'

import './ToDoList.css'

import NewTask from '../NewTask/NewTask'
import { deleteTask, updateTasks } from '../../actions/action_creators'

export default function ToDoList() {
    const tasks = useSelector(state => state.tasks.tasks);
    const dispatch = useDispatch();

    const handleClick = (event) => {
        event.preventDefault();
        const targetKey = event.target.dataset.id;
        dispatch(deleteTask(targetKey))
    }
    const handleChange = (taskId) => {
        dispatch(updateTasks(taskId)); 
    };

    const { targetTasks } = useParams();
    const taskStatus = targetTasks ?? 'All'

    const taskList = tasks
    .filter(task => (String(task.taskState) === taskStatus || taskStatus === 'All'))
    .map(task => (
        <li className={`todo-item ${task.taskState === 'complete' ? 'completed' : ''}`}  key={task.id}>
            <div className='todo-check-box' htmlFor='taskCheckbox'>
                <input 
                type="checkbox" 
                checked={task.taskState === 'complete'} 
                id='taskCheckbox' 
                onChange={() => handleChange(task.id)}
                />
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
            <div className='todo-link-container'>
                <Link to={'/todo'} className='todo-link'>All</Link>
                <Link to={'/todo/incomplete'} className='todo-link'>Incomplete</Link>
                <Link to={'/todo/complete'} className='todo-link'>Complete</Link>
            </div>
        </div>
    </div>
  )
}