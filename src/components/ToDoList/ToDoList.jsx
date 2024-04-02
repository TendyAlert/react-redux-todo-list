import React from 'react'
import './ToDoList.css'

import NewTask from '../NewTask/NewTask'

export default function ToDoList() {
    const todo = 'This is a checkbox'

  return (
    <div>
        <NewTask />
        <div className='todo-list-container'>
            <ul className='todo-list'>
                <li className='todo-item'>
                    <label className='todo-check-box'>
                        <input type="checkbox" />
                        {todo}
                    </label>
                </li>
                <li className='todo-item'>
                    <label className='todo-check-box'>
                        <input type="checkbox" />
                        {todo}
                    </label>
                </li>
                <li className='todo-item'>
                    <label className='todo-check-box'>
                        <input type="checkbox" />
                        {todo}
                    </label>
                </li>
            </ul>
        </div>
    </div>
  )
}
