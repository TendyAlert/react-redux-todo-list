import React from 'react'

export default function NewTask() {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

  return (
    <div>
        <form action="#" onSubmit={handleSubmit}>
            <div className="formrow">
                <input type="text" placeholder='Task...' className='new-task-box'/>
                <button type="submit">Add</button>
            </div>
        </form>
    </div>
  )
}
