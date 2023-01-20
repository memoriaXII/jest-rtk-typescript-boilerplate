import { configureStore } from '@reduxjs/toolkit'

import authReducer from '../reducers/authSlice'
import counterReducer from '../reducers/counterSlice'
import taskReducer from '../reducers/tasksSlice'

export default configureStore({
  reducer: {
    tasks: taskReducer,
    counter: counterReducer,
    auth: authReducer,
  },
})
