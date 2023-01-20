import type { NextPage } from 'next'

import { AddTodo } from '@/components/AddTodo'
import { Counter } from '@/components/Counter'
import { TaskList } from '@/components/TaskList'

const Home: NextPage = () => (
  <div>
    <AddTodo />
    <TaskList />
    <Counter />
  </div>
)

export default Home
