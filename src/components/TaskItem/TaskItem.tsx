import React from 'react'
import { useDispatch } from 'react-redux'

import { deleteTask } from '@/redux/reducers/tasksSlice'

const TaskItem = ({ id, title }: any) => {
  const dispatch = useDispatch()

  const removeTask = () => {
    dispatch(
      deleteTask({
        id,
      }),
    )
  }

  return (
    <li className='task-item'>
      <div>{title}</div>
      <div>
        <button
          type='button'
          className='remove-task-button'
          onClick={() => {
            removeTask()
          }}
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default TaskItem
