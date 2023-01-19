/* eslint-disable react/react-in-jsx-scope */
import type { NextPage } from 'next'

import { AddTodo } from '@/components/AddTodo'
import TaskListContainer from '@/containers/TaskListContainer'

const Home: NextPage = () => (
  <div>
    <AddTodo />
    <TaskListContainer />
  </div>
)

export default Home
