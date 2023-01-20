/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch } from 'react-redux'

import { login } from '@/redux/reducers/authSlice'

const Login = () => {
  const dispatch = useDispatch()

  const loginHandler = (event: any) => {
    event.preventDefault()
    dispatch(login())
  }

  return (
    <form onSubmit={loginHandler}>
      <div>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' />
      </div>
      <button type='submit'>Login</button>
    </form>
  )
}

export default Login
