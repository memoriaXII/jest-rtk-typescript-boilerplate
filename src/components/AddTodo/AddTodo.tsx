import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addTask } from '@/redux/reducers/tasksSlice'

const AddTodo = () => {
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (event: any) => {
    event.preventDefault()

    if (value.trim().length === 0) {
      alert('Enter a task before adding !!')
      setValue('')
      return
    }

    dispatch(
      addTask({
        task: value,
      } as any),
    )
    setValue('')
  }

  return (
    <div className='add-todo'>
      <input
        type='text'
        className='task-input'
        placeholder='Add task'
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />

      <button className='task-button' onClick={onSubmit} type='button'>
        Save
      </button>
    </div>
  )
}

export default AddTodo
