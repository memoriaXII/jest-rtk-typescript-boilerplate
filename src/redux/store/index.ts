import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '../reducers/counterSlice'
import taskReducer from '../reducers/tasksSlice'

export default configureStore({
  reducer: {
    tasks: taskReducer,
    counter: counterReducer,
  },
})
