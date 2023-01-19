import React from 'react'
import { useSelector } from 'react-redux'

import { TaskItem } from '@/components/TaskItem'

const TodoList = () => {
  const todos = useSelector((state: any) => state.tasks)

  return (
    <ul className='tasks-list'>
      {todos.map((todo: any) => (
        <TaskItem id={todo.id} title={todo.name} completed={todo.status} />
      ))}
    </ul>
  )
}

export default TodoList
