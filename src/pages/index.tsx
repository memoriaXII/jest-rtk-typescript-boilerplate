import { useDispatch, useSelector } from 'react-redux'
import type { NextPage } from 'next'

import { AddTodo } from '@/components/AddTodo'
import { Counter } from '@/components/Counter'
import { Login } from '@/components/Login'
import { TaskList } from '@/components/TaskList'
import { getIsAuthenticated, logout } from '@/redux/reducers/authSlice'

const Home: NextPage = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(getIsAuthenticated)

  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <div>
      {!isAuth && <Login />}
      {isAuth && (
        <button type='button' onClick={logoutHandler}>
          Logout
        </button>
      )}
      <AddTodo />
      <TaskList />
      <Counter />
    </div>
  )
}

export default Home
