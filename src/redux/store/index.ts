import { configureStore } from '@reduxjs/toolkit'

import taskReducer from '../reducers/tasksSlice'

export default configureStore({
  reducer: {
    tasks: taskReducer,
  },
})
